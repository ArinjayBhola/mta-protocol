import * as crypto from 'crypto';

const Q = BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141");

async function verify() {
    const a = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;
    const b = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;

    console.log(`[Verify] a: ${a.toString(16)}`);
    console.log(`[Verify] b: ${b.toString(16)}`);

    const bits = a.toString(2).padStart(256, '0').split('').reverse();
    let totalS = 0n;
    let totalR = 0n;

    for (let i = 0; i < 256; i++) {
        const r_i = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;
        totalR = (totalR + r_i) % Q;

        const b_times_2i = (b * (2n ** BigInt(i))) % Q;
        const m0 = r_i;
        const m1 = (r_i + b_times_2i) % Q;

        const s_i = bits[i] === '0' ? m0 : m1;
        totalS = (totalS + s_i) % Q;
    }

    const x = totalS;
    const y = (Q - totalR) % Q;

    console.log(`[Verify] x: ${x.toString(16)}`);
    console.log(`[Verify] y: ${y.toString(16)}`);

    const sum = (x + y) % Q;
    const expected = (a * b) % Q;

    console.log(`[Verify] x + y mod Q: ${sum.toString(16)}`);
    console.log(`[Verify] a * b mod Q: ${expected.toString(16)}`);

    if (sum === expected) {
        console.log("MTA verified");
    } else {
        console.log("MTA failed");
    }
}

verify();
