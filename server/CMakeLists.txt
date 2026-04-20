cmake_minimum_required(VERSION 3.10)
project(MTAServer)

set(CMAKE_CXX_STANDARD 17)

# Boost
find_package(Boost REQUIRED COMPONENTS system)

# Trezor-crypto source files
set(TREZOR_DIR ${CMAKE_CURRENT_SOURCE_DIR}/trezor-crypto)
set(TREZOR_SOURCES
    ${TREZOR_DIR}/bignum.c
    ${TREZOR_DIR}/ecdsa.c
    ${TREZOR_DIR}/curves.c
    ${TREZOR_DIR}/secp256k1.c
    ${TREZOR_DIR}/sha2.c
    ${TREZOR_DIR}/memzero.c
    ${TREZOR_DIR}/rand.c
    ${TREZOR_DIR}/hmac.c
    ${TREZOR_DIR}/rfc6979.c
)

# Nanopb source files
set(NANOPB_DIR ${CMAKE_CURRENT_SOURCE_DIR}/nanopb)
set(NANOPB_SOURCES
    ${NANOPB_DIR}/pb_common.c
    ${NANOPB_DIR}/pb_encode.c
    ${NANOPB_DIR}/pb_decode.c
)

# Generated files
set(GEN_DIR ${CMAKE_CURRENT_SOURCE_DIR}/nanopb_gen)
set(GEN_SOURCES
    ${GEN_DIR}/mta.pb.c
)

include_directories(
    ${TREZOR_DIR}
    ${NANOPB_DIR}
    ${GEN_DIR}
    ${Boost_INCLUDE_DIRS}
)

add_executable(mta_server
    main.cpp
    mta_server.cpp
    crypto_utils.cpp
    ${TREZOR_SOURCES}
    ${NANOPB_SOURCES}
    ${GEN_SOURCES}
)

target_link_libraries(mta_server ${Boost_LIBRARIES})
