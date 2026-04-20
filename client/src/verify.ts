import * as crypto from 'crypto';

const Q = BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141");

async function verify() {
    const x = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;
    const y = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;

    console.log(`[Verify] Alice's x: ${x.toString(16)}`);
    console.log(`[Verify] Bob's y: ${y.toString(16)}`);

    const bitsY = y.toString(2).padStart(256, '0').split('').reverse();
    let totalWeightedUi = 0n;
    let totalWeightedMci = 0n;

    for (let i = 0; i < 256; i++) {
        const powerOf2 = 2n ** BigInt(i);
        
        // Alice picks random Ui
        const Ui = BigInt("0x" + crypto.randomBytes(32).toString('hex')) % Q;
        totalWeightedUi = (totalWeightedUi + (Ui * powerOf2)) % Q;

        // Bob's chosen bit yi
        const yi = BigInt(bitsY[i]);
        
        // Bob receives mc_i = Ui + yi * x
        const mci = (Ui + yi * x) % Q;
        totalWeightedMci = (totalWeightedMci + (mci * powerOf2)) % Q;
    }

    // Alice's additive share U = -sum(2^i * Ui)
    const U = (Q - totalWeightedUi) % Q;
    
    // Bob's additive share V = sum(2^i * mci)
    const V = totalWeightedMci;

    console.log(`[Verify] U: ${U.toString(16)}`);
    console.log(`[Verify] V: ${V.toString(16)}`);

    const sum = (U + V) % Q;
    const expected = (x * y) % Q;

    console.log(`[Verify] U + V mod Q: ${sum.toString(16)}`);
    console.log(`[Verify] x * y mod Q: ${expected.toString(16)}`);

    if (sum === expected) {
        console.log("SUCCESS: MTA protocol verified with weighted sums!");
    } else {
        console.log("FAILURE: MTA protocol failed!");
    }
}

verify();
