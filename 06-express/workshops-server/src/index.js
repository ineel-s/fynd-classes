const express = require( 'express' );

// Create an application object
const app = express();

// app.<http_method>()
// app.get( '/', ( req, res ) => {
//     res.end( 'This is the workshops server' );
// });

// /workshops -> base route for all paths handled by the router (called "mount path")
app.use( '/', require( './routes/index.routes' ) );
app.use( '/workshops', require( './routes/workshops.routes' ) );

const PORT = process.env.PORT || 3000;

// creates a web server and starts that internally
app.listen( PORT, () => {
    console.log( `server started on - http://localhost:${PORT}` );
});