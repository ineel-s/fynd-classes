const fs = require( 'fs' );
const path = require( 'path' );

const cssGuidePath = path.join( __dirname, 'css.pdf' );
const cssGuideCopyPath = path.join( __dirname, 'css.copy.pdf' );

const rs = fs.createReadStream( cssGuidePath );
const ws = fs.createWriteStream( cssGuideCopyPath );

// "join" the read and write stream using pipe()
// this will write to ws as and when chunks are read from rs
// pipe() implements best practices - memory efficient in all case
rs.pipe( ws );

rs.on( 'error', error => {
    console.log( error.message );
});

ws.on( 'error', error => {
    console.log( error.message );
});