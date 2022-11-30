const http = require( 'http' );
const url = require( 'url' );
const fs = require( 'fs' );
const path = require( 'path' );

const server = http.createServer();

// PORT number can vary in development and production "environments"
const { PORT } = process.env;

server.listen( PORT );

// The server object is an event emitter - so we can use on()
server.on( 'listening', () => {
    console.log( `server running on http://localhost:${PORT}` );
});

// fired when a request is received
// request object req is a read stream
// response object res is a read stream
server.on( 'request', ( req, res ) => { // called whenever there is an HTTP request to server
    const { pathname } = url.parse( req.url, true );
    let rs;

    switch( pathname ) {
        case '/':
            rs = fs.createReadStream( path.join( __dirname, 'home.html' ) );
            rs.pipe( res );
            break;
        case '/calendar':
            rs = fs.createReadStream( path.join( __dirname, 'calendar.html' ) );
            rs.pipe( res );
            break;
        default:
            rs = fs.createReadStream( path.join( __dirname, '404.html' ) );
            rs.pipe( res );
    }
});

// for any event emitter - we MUST handle the 'error' event (it is a special event which must be handled) - if error event occurs and you do not have a handler, the program will exit!
server.on( 'error', error => {
    console.log( error.message );
});