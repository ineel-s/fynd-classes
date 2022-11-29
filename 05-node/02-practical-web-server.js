const http = require( 'http' );
// const Config = require( './02-pages' ); // module.exports from the file
const {
    Pages: {
        home,
        about,
        pageNotFound
    }
} = require( './02-pages' ); // use relative path(. or ..) for your own modules

// SAME as module.exports in 02-pages.js
// { Pages: { ... } }
// console.log( Config );

const server = http.createServer(
    ( request, response ) => {
        const url = request.url; // http://localhost:3000/about/me?format=detailed (url -> '/about/me?format=detailed')

        switch( url ) {
            case '/':
                response.end( home );
                break;
            case '/about':
                response.end( about );
                break;
            default:
                response.end( pageNotFound );
        }
    }
);

server.listen( 3000 );