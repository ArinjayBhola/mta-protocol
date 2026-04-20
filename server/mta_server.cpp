#include "mta_server.h"
#include "pb_encode.h"
#include "pb_decode.h"
#include "trezor-crypto/sha2.h"
#include <iostream>
#include <iomanip>
#include <vector>

MTAServer::MTAServer(boost::asio::io_context& io_context, short port)
    : share_b(), additive_share_y() {
    uint8_t rand_bytes[32];
    CryptoUtils::generate_random_32(rand_bytes);
    CryptoUtils::bytes_to_bn(rand_bytes, &share_b);
    
    std::cout << "[Server] share b: ";
    for(int i=0; i<32; i++) printf("%02x", rand_bytes[i]);
    std::cout << std::endl;
}

void MTAServer::run_with_socket(tcp::socket& socket) {
    handle_client(std::move(socket));
}

void MTAServer::handle_client(tcp::socket socket) {
    try {
        perform_mta(socket);
    } catch (std::exception& e) {
        std::cerr << "Exception: " << e.what() << std::endl;
    }
}

void MTAServer::perform_mta(tcp::socket& socket) {
    bignum256 n = CryptoUtils::get_order();

    uint8_t secret_a[32];
    CryptoUtils::generate_random_32(secret_a);
    
    curve_point A;
    scalar_multiply(&secp256k1, secret_a, &A);
    
    uint8_t A_bytes[65];
    A_bytes[0] = 0x04;
    bn_write_be(&A.x, A_bytes + 1);
    bn_write_be(&A.y, A_bytes + 33);

    Handshake handshake = Handshake_init_default;
    handshake.bob_gy.size = 65;
    memcpy(handshake.bob_gy.bytes, A_bytes, 65);
    
    uint8_t buffer[2048];
    pb_ostream_t stream = pb_ostream_from_buffer(buffer, sizeof(buffer));
    pb_encode(&stream, Handshake_fields, &handshake);
    
    uint32_t size = (uint32_t)stream.bytes_written;
    boost::asio::write(socket, boost::asio::buffer(&size, 4));
    boost::asio::write(socket, boost::asio::buffer(buffer, size));

    uint32_t req_size;
    boost::asio::read(socket, boost::asio::buffer(&req_size, 4));
    std::vector<uint8_t> req_buffer(req_size);
    boost::asio::read(socket, boost::asio::buffer(req_buffer.data(), req_size));
    
    MTASession session = MTASession_init_default;
    pb_istream_t istream = pb_istream_from_buffer(req_buffer.data(), req_size);
    pb_decode(&istream, MTASession_fields, &session);

    MTAResponse response = MTAResponse_init_default;
    response.responses_count = 256;
    
    bignum256 total_r;
    bn_zero(&total_r);

    for (int i = 0; i < 256; ++i) {
        curve_point B;
        bn_read_be(session.requests[i].pk0.bytes + 1, &B.x);
        bn_read_be(session.requests[i].pk0.bytes + 33, &B.y);

        curve_point K0_point;
        point_multiply(&secp256k1, secret_a, &B, &K0_point);
        uint8_t K0_raw[64];
        bn_write_be(&K0_point.x, K0_raw);
        bn_write_be(&K0_point.y, K0_raw + 32);
        
        curve_point negA = A;
        bignum256 prime;
        bn_read_be(secp256k1.prime, &prime);
        bn_sub(&prime, &negA.y, &negA.y); 
        curve_point B_minus_A;
        point_add(&secp256k1, &B, &negA, &B_minus_A);
        
        curve_point K1_point;
        point_multiply(&secp256k1, secret_a, &B_minus_A, &K1_point);
        uint8_t K1_raw[64];
        bn_write_be(&K1_point.x, K1_raw);
        bn_write_be(&K1_point.y, K1_raw + 32);

        uint8_t key0[32], key1[32];
        sha256_Raw(K0_raw, 64, key0);
        sha256_Raw(K1_raw, 64, key1);

        uint8_t r_i_bytes[32];
        CryptoUtils::generate_random_32(r_i_bytes);
        bignum256 r_i;
        CryptoUtils::bytes_to_bn(r_i_bytes, &r_i);
        bn_addmod(&total_r, &r_i, &n, &total_r);

        bignum256 b_times_2i = share_b;
        for(int j=0; j<i; j++) {
            bn_addmod(&b_times_2i, &b_times_2i, &n, &b_times_2i);
        }
        
        bignum256 m0 = r_i;
        bignum256 m1;
        bn_addmod(&r_i, &b_times_2i, &n, &m1);

        bignum256 k0_bn, k1_bn, e0, e1;
        CryptoUtils::bytes_to_bn(key0, &k0_bn);
        CryptoUtils::bytes_to_bn(key1, &k1_bn);
        bn_addmod(&k0_bn, &m0, &n, &e0);
        bn_addmod(&k1_bn, &m1, &n, &e1);

        response.responses[i].e0.size = 32;
        CryptoUtils::bn_to_bytes(&e0, response.responses[i].e0.bytes);
        response.responses[i].e1.size = 32;
        CryptoUtils::bn_to_bytes(&e1, response.responses[i].e1.bytes);
    }

    bignum256 zero; bn_zero(&zero);
    bn_submod(&zero, &total_r, &n, &additive_share_y);

    std::vector<uint8_t> resp_buffer(32000);
    stream = pb_ostream_from_buffer(resp_buffer.data(), resp_buffer.size());
    pb_encode(&stream, MTAResponse_fields, &response);
    
    size = (uint32_t)stream.bytes_written;
    boost::asio::write(socket, boost::asio::buffer(&size, 4));
    boost::asio::write(socket, boost::asio::buffer(resp_buffer.data(), size));

    std::cout << "[Server] MTA complete. Additive share y: ";
    uint8_t y_bytes[32];
    CryptoUtils::bn_to_bytes(&additive_share_y, y_bytes);
    for(int i=0; i<32; i++) printf("%02x", y_bytes[i]);
    std::cout << std::endl;
}
