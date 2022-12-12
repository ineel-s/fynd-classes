const express = require( 'express' );
const path = require( 'path' );
const { connect } = require( './db/init' );

// Create an application object
const app = express();

// set() / get() helps use key-value pairs across the app
app.set( 'app_title', 'Workshops App' );

// set up the templating engine (ejs)
app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );

// app.get( '/public/external/css/bootstrap.css', ( req, res ) => {
//     res.sendFile( path.join( process.cwd(), '/public/external/css/bootstrap.css' ) );
// } )
// instead of setting up individual routes for CSS, JS, font files, images etc., we can use express static file server
app.use( express.static( path.join( process.cwd(), 'public' ) ) );

// whenever the request body contains JSON data, Express will make that data available on req.body
app.use( express.json() );
// whenever the request body contains form data, Express will make that data available on req.body
app.use( express.urlencoded( { extended: false } ) );

// app.<http_method>()
// app.get( '/', ( req, res ) => {
//     res.end( 'This is the workshops server' );
// });

// /workshops -> base route for all paths handled by the router (called "mount path")
app.use( '/', require( './routes/index.routes' ) );
app.use( '/workshops', require( './routes/workshops.routes' ) );

const PORT = process.env.PORT || 3000;

// creates a web server and starts that internally
connect()
    .then(() => {
        app.listen( PORT, () => {
            console.log( `server started on - http://localhost:${PORT}` );
        });
    })
    .catch(error => {
        process.exit( 1 );
    });