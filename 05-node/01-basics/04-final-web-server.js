const http = require( 'http' );
const url = require( 'url' );
const {
    Pages: {
        home,
        about,
        aboutDetailed,
        pageNotFound
    }
} = require( './02-pages' );

const server = http.createServer(
    ( request, response ) => {
        // passing true as 2nd argument to url.parse() gives the query as an object - easy to work with the object rather than unparsed query string
        const { pathname, query } = url.parse( request.url, true );

        console.log( query );

        switch( pathname ) {
            case '/':
                response.end( home );
                break;
            case '/about':
                if( query.format === 'detailed' ) {
                    response.end( aboutDetailed );
                } else {
                    response.end( about );
                }
                break;
            default:
                response.end( pageNotFound );
        }
    }
);

server.listen( 3000 );