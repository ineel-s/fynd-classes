const express = require( 'express' );

// Create an application object
const app = express();

// app.<http_method>()
app.get( '/', ( req, res ) => {
    res.write( 'Hello Express' );
    res.end( 'More to learn...' )
});

const PORT = process.env.PORT || 3000;

// creates a web server and starts that internally
app.listen( PORT, () => {
    console.log( `server started on - http://localhost:${PORT}` );
});