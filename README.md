# MTA Share Conversion with COT

This project implements the Multiplicative-to-Additive (MTA) share conversion protocol for threshold ECDSA, as described in Appendix A.3 of the Correlated Oblivious Transfer (COT) specification.

## Overview

The protocol allows two parties (Client and Server) to convert their multiplicative shares $(a, b)$ into additive shares $(x, y)$ such that:
$$x + y \equiv a \cdot b \pmod q$$
where $q$ is the order of the secp256k1 curve.

### Components

- **Server (C++)**: Implemented using C++17, Boost.Asio for networking, and `trezor-crypto` for elliptic curve operations.
- **Client (TypeScript)**: Implemented using Node.js and custom BigInt-based point arithmetic.
- **Protocol Buffers**: Defined in `proto/mta.proto` for efficient cross-language serialization.

## Build and Run

### Server
Prerequisites: CMake, Boost, Trezor-crypto.
```bash
cd server
mkdir build && cd build
cmake ..
cmake --build .
./mta_server
```

### Client
Prerequisites: Node.js, npm.
```bash
cd client
npm install
npm run proto
npm run build
npm start
```

## Testing

A standalone verification script is provided to simulate the protocol logic:
```bash
npx ts-node src/verify.ts
```

## License
MIT
