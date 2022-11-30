const http = require( 'http' );

const server = http.createServer(
    ( req, res ) => { // called whenever there is an HTTP request to server
        res.end(  'Hello for now' );
    }
);

// PORT number can vary in development and production "environments"
const { PORT } = process.env;

server.listen( PORT );

// The server object is an event emitter - so we can use on()
server.on( 'listening', () => {
    console.log( `server running on http://localhost:${PORT}` );
});

// for any event emitter - we MUST handle the 'error' event (it is a special event which must be handled) - if error event occurs and you do not have a handler, the program will exit!
server.on( 'error', error => {
    console.log( error.message );
});