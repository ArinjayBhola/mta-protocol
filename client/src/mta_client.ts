import * as crypto from 'crypto';
import * as net from 'net';
import { MTASession, MTAResponse, OTRequest, Handshake } from './proto/mta';

const Q = BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141");
const P = BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F");

interface Point {
    x: bigint;
    y: bigint;
}

const G: Point = {
    x: BigInt("0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798"),
    y: BigInt("0x483ADA7726A3C4655DA4FBFC0E1108A8FB17B448A68554199C47D08FFB10D4B8")
};

function modInverse(a: bigint, m: bigint): bigint {
    let m0 = m;
    let y = 0n, x = 1n;
    if (m === 1n) return 0n;
    while (a > 1n) {
        let q = a / m;
        let t = m;
        m = a % m; a = t;
        t = y;
        y = x - q * y;
        x = t;
    }
    if (x < 0n) x += m0;
    return x;
}

function pointAdd(p1: Point, p2: Point): Point {
    if (p1.x === p2.x && p1.y === p2.y) return pointDouble(p1);
    const s = ((p2.y - p1.y + P) % P * modInverse((p2.x - p1.x + P) % P, P)) % P;
    const x3 = (s * s - p1.x - p2.x + 2n * P) % P;
    const y3 = (s * (p1.x - x3) - p1.y + 2n * P) % P;
    return { x: x3, y: y3 };
}

function pointDouble(p: Point): Point {
    const s = (3n * p.x * p.x % P * modInverse(2n * p.y, P)) % P;
    const x3 = (s * s - 2n * p.x + 2n * P) % P;
    const y3 = (s * (p.x - x3) - p.y + 2n * P) % P;
    return { x: x3, y: y3 };
}

function pointMul(p: Point, k: bigint): Point {
    let res: Point | null = null;
    let base = p;
    while (k > 0n) {
        if (k % 2n === 1n) {
            if (!res) res = base;
            else res = pointAdd(res, base);
        }
        base = pointDouble(base);
        k /= 2n;
    }
    return res!;
}

function pointToBytes(p: Point): Buffer {
    const buf = Buffer.alloc(65);
    buf[0] = 0x04;
    buf.write(p.x.toString(16).padStart(64, '0'), 1, 'hex');
    buf.write(p.y.toString(16).padStart(64, '0'), 33, 'hex');
    return buf;
}

function bytesToPoint(buf: Buffer): Point {
    return {
        x: BigInt("0x" + buf.subarray(1, 33).toString('hex')),
        y: BigInt("0x" + buf.subarray(33, 65).toString('hex'))
    };
}

export class MTAClient {
    private shareA: bigint;
    private additiveShareX: bigint = 0n;

    constructor() {
        this.shareA = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;
        console.log(`[Client] multiplicative share a: ${this.shareA.toString(16)}`);
    }

    async run(host: string, port: number) {
        const socket = net.connect(port, host);
        
        socket.on('connect', async () => {
            console.log(`[Client] Connected to ${host}:${port}`);
            
            // Handshake
            const sizeBuf = await this.readExactly(socket, 4);
            const size = sizeBuf.readUInt32LE(0);
            const data = await this.readExactly(socket, size);
            const handshake = Handshake.decode(data);
            const A = bytesToPoint(Buffer.from(handshake.bobGy));

            const requests: OTRequest[] = [];
            const secrets: bigint[] = [];
            const bits = this.shareA.toString(2).padStart(256, '0').split('').reverse();

            for (let i = 0; i < 256; i++) {
                const k = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;
                secrets.push(k);
                const gk = pointMul(G, k);
                
                let pk0: Point;
                if (bits[i] === '0') {
                    pk0 = gk;
                } else {
                    pk0 = pointAdd(A, gk);
                }
                requests.push(OTRequest.create({ pk0: pointToBytes(pk0) }));
            }

            const session = MTASession.create({ requests });
            const sessionBuf = MTASession.encode(session).finish();
            const sessionSize = Buffer.alloc(4);
            sessionSize.writeUInt32LE(sessionBuf.length, 0);
            socket.write(sessionSize);
            socket.write(sessionBuf);

            // Response processing
            const respSizeBuf = await this.readExactly(socket, 4);
            const respSize = respSizeBuf.readUInt32LE(0);
            const respData = await this.readExactly(socket, respSize);
            const response = MTAResponse.decode(respData);

            let totalS = 0n;
            for (let i = 0; i < 256; i++) {
                const k = secrets[i];
                const Ka = pointMul(A, k);
                const kaBytes = Buffer.concat([
                    Buffer.from(Ka.x.toString(16).padStart(64, '0'), 'hex'),
                    Buffer.from(Ka.y.toString(16).padStart(64, '0'), 'hex')
                ]);
                const hash = crypto.createHash('sha256').update(kaBytes).digest();
                const keyBn = BigInt("0x" + hash.toString('hex'));

                const e0 = BigInt("0x" + Buffer.from(response.responses[i].e0!).toString('hex'));
                const e1 = BigInt("0x" + Buffer.from(response.responses[i].e1!).toString('hex'));
                
                const ei = bits[i] === '0' ? e0 : e1;
                const si = (ei - keyBn + Q) % Q;
                totalS = (totalS + si) % Q;
            }

            this.additiveShareX = totalS;
            console.log(`[Client] MTA complete. Additive share x: ${this.additiveShareX.toString(16)}`);
            socket.end();
        });
    }

    private readExactly(socket: net.Socket, n: number): Promise<Buffer> {
        return new Promise((resolve) => {
            let buf = Buffer.alloc(0);
            const onData = (data: Buffer) => {
                buf = Buffer.concat([buf, data]);
                if (buf.length >= n) {
                    socket.off('data', onData);
                    resolve(buf.subarray(0, n));
                }
            };
            socket.on('data', onData);
        });
    }
}
