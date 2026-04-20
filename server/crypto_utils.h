#ifndef CRYPTO_UTILS_H
#define CRYPTO_UTILS_H

#include "trezor-crypto/bignum.h"
#include "trezor-crypto/ecdsa.h"
#include "trezor-crypto/secp256k1.h"
#include <vector>
#include <string>

class CryptoUtils {
public:
    static void init();
    static void generate_random_32(uint8_t* out);
    static void bytes_to_bn(const uint8_t* bytes, bignum256* bn);
    static void bn_to_bytes(const bignum256* bn, uint8_t* bytes);
    
    static const bignum256& get_order();
};

#endif
