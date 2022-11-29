const http = require( 'http' );

const server = http.createServer(
    ( request, response ) => {
        const url = request.url; // http://localhost:3000/about/me?format=detailed (url -> '/about/me?format=detailed')

        switch( url ) {
            case '/':
                response.end(
                    `
                        <!doctype html>
                        <html>
                            <head><title>Home</title></head>
                            <body>
                                <h1>Home</h1>
                                <hr />
                            </body>
                        </html>
                    `
                );
                break;
            case '/about':
                response.end(
                    `
                        <!doctype html>
                        <html>
                            <head><title>About</title></head>
                            <body>
                                <h1>About</h1>
                                <hr />
                            </body>
                        </html>
                    `
                );
                break;
            default:
                response.end(
                    `
                        <!doctype html>
                        <html>
                            <head><title>Not found</title></head>
                            <body>
                                <h1>Not found</h1>
                                <hr />
                            </body>
                        </html>
                    `
                );
        }
    }
);

server.listen( 3000 );