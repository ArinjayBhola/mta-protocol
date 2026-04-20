#include "crypto_utils.h"
#include "trezor-crypto/rand.h"
#include "trezor-crypto/curves.h"
#include <cstring>
#include <stdexcept>

void CryptoUtils::init() {
    // trezor-crypto initialization if needed
}

void CryptoUtils::generate_random_32(uint8_t* out) {
    random_buffer(out, 32);
    // Ensure it's less than order
    bignum256 bn;
    bytes_to_bn(out, &bn);
    bn_mod(&bn, &get_order());
    bn_to_bytes(&bn, out);
}

void CryptoUtils::bytes_to_bn(const uint8_t* bytes, bignum256* bn) {
    bn_read_be(bytes, bn);
}

void CryptoUtils::bn_to_bytes(const bignum256* bn, uint8_t* bytes) {
    bn_write_be(bn, bytes);
}

const bignum256& CryptoUtils::get_order() {
    static bignum256 n;
    static bool initialized = false;
    if (!initialized) {
        const curve_info *curve = &secp256k1;
        bn_read_be(curve->order, &n);
        initialized = true;
    }
    return n;
}
