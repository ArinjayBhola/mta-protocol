#ifndef MTA_SERVER_H
#define MTA_SERVER_H

#include "crypto_utils.h"
#include <boost/asio.hpp>
#include "nanopb_gen/mta.pb.h"

using boost::asio::ip::tcp;

class MTAServer {
public:
    MTAServer(boost::asio::io_context& io_context, short port);
    void run_with_socket(tcp::socket& socket);

private:
    void handle_client(tcp::socket socket);
    
    // MTA Protocol components
    void perform_mta(tcp::socket& socket);

    bignum256 share_b;
    bignum256 additive_share_y;
};

#endif
