#include "mta_server.h"
#include <iostream>

int main() {
    try {
        boost::asio::io_context io_context;
        MTAServer server(io_context, 12345);
        
        tcp::acceptor acceptor(io_context, tcp::endpoint(tcp::v4(), 12345));
        std::cout << "[Server] Listening on port 12345..." << std::endl;
        
        tcp::socket socket(io_context);
        acceptor.accept(socket);
        std::cout << "[Server] Client connected!" << std::endl;
        
        server.run_with_socket(socket); // I'll add this method or just call a handler
        
    } catch (std::exception& e) {
        std::cerr << "[Server] Error: " << e.what() << std::endl;
    }
    return 0;
}
