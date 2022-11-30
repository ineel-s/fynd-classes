// EXERCISE (OPTIONAL): Understanding backpressure in streams - https://nodejs.org/en/docs/guides/backpressuring-in-streams/
const fs = require( 'fs' );
const path = require( 'path' );

// const packagePath = path.join( __dirname, '..', 'package.json' );
const packagePath = path.join( __dirname, 'css.pdf' );

// create a "read stream" to read the file (we get a stream object)
// the file reading starts immediately...
// rs object will emit events
//    - 'data' event is fired when a chunk is read
//    - 'end' event is fired when the file has been read completely
//    - 'error' event is fired when there is an error reading the file
const rs = fs.createReadStream( packagePath/*, 'utf-8' */ );

// rs.addListener() / rs.on() are the SAME
rs.on( 'data', ( chunk ) => { // by default a chunk is 64KB
    console.log( 'a chunk is read' );
    console.log( chunk );
});

rs.on( 'end', () => {
    console.log( 'file has been read' );
});

// the 'error' event MUST be handled
rs.on( 'error', error => {
    console.log( error.message );
});