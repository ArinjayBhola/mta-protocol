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
    
    std::cout << "[Server] multiplicative share x: ";
    for(int i=0; i<32; i++) printf("%02x", rand_bytes[i]);
    std::cout << std::endl;
}

void MTAServer::run_with_socket(tcp::socket& socket) {
    handle_client(std::move(socket));
}

void MTAServer::handle_client(tcp::socket socket) {
    try { perform_mta(socket); } catch (std::exception& e) { std::cerr << "Err: " << e.what() << std::endl; }
}

void MTAServer::perform_mta(tcp::socket& socket) {
    bignum256 n = CryptoUtils::get_order();

    uint8_t secret_a[32];
    CryptoUtils::generate_random_32(secret_a);
    bignum256 a; CryptoUtils::bytes_to_bn(secret_a, &a);
    
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
    
    bignum256 total_u; bn_zero(&total_u);
    bignum256 power_of_2; bn_one(&power_of_2);

    for (int i = 0; i < 256; ++i) {
        curve_point B;
        bn_read_be(session.requests[i].pk0.bytes + 1, &B.x);
        bn_read_be(session.requests[i].pk0.bytes + 33, &B.y);

        curve_point K0_point, K1_point;
        point_multiply(&secp256k1, secret_a, &B, &K0_point);
        
        curve_point negA = A;
        bignum256 prime; bn_read_be(secp256k1.prime, &prime);
        bn_sub(&prime, &negA.y, &negA.y); 
        curve_point B_minus_A;
        point_add(&secp256k1, &B, &negA, &B_minus_A);
        point_multiply(&secp256k1, secret_a, &B_minus_A, &K1_point);

        uint8_t k0_x[32], k1_x[32], key0[32], key1[32];
        bn_write_be(&K0_point.x, k0_x);
        bn_write_be(&K1_point.x, k1_x);
        sha256_Raw(k0_x, 32, key0);
        sha256_Raw(k1_x, 32, key1);

        bignum256 ui, ui_plus_x, k0_bn, k1_bn, e0, e1;
        uint8_t ui_bytes[32]; CryptoUtils::generate_random_32(ui_bytes);
        CryptoUtils::bytes_to_bn(ui_bytes, &ui);
        bn_addmod(&ui, &share_b, &n, &ui_plus_x);

        CryptoUtils::bytes_to_bn(key0, &k0_bn);
        CryptoUtils::bytes_to_bn(key1, &k1_bn);
        bn_addmod(&k0_bn, &ui, &n, &e0);
        bn_addmod(&k1_bn, &ui_plus_x, &n, &e1);

        response.responses[i].e0.size = 32;
        CryptoUtils::bn_to_bytes(&e0, response.responses[i].e0.bytes);
        response.responses[i].e1.size = 32;
        CryptoUtils::bn_to_bytes(&e1, response.responses[i].e1.bytes);

        // Weighted sum for Alice: U = - sum(2^i * Ui)
        bignum256 weighted_ui;
        bn_multiply(&ui, &power_of_2, &n, &weighted_ui);
        bn_addmod(&total_u, &weighted_ui, &n, &total_u);
        
        bn_addmod(&power_of_2, &power_of_2, &n, &power_of_2); // 2^i
    }

    bignum256 zero; bn_zero(&zero);
    bn_submod(&zero, &total_u, &n, &additive_share_y);

    std::vector<uint8_t> resp_buffer(32000);
    stream = pb_ostream_from_buffer(resp_buffer.data(), resp_buffer.size());
    pb_encode(&stream, MTAResponse_fields, &response);
    
    size = (uint32_t)stream.bytes_written;
    boost::asio::write(socket, boost::asio::buffer(&size, 4));
    boost::asio::write(socket, boost::asio::buffer(resp_buffer.data(), size));

    std::cout << "[Server] additive share U: ";
    uint8_t u_bytes[32]; CryptoUtils::bn_to_bytes(&additive_share_y, u_bytes);
    for(int i=0; i<32; i++) printf("%02x", u_bytes[i]);
    std::cout << std::endl;
}
