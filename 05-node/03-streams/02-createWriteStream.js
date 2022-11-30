const fs = require( 'fs' );
const path = require( 'path' );

const helloPath = path.join( __dirname, 'hello.txt' );

// EXERCISE: Explore flags option in 2nd options arguments
const ws = fs.createWriteStream( helloPath, { encoding: 'utf-8'/*, flags: 'a+'*/ } );

// we can write in small chunks unlike writeFile() - we dont need all the contents at once in memory! good!
for( let i = 0; i < 10; i++ ) {
    ws.write( '1. Hello write stream\n' );
    ws.write( '2. Thanks to you I can write little by little\n' );
}

ws.end( '3. That is all for now...' );

ws.on( 'error', error => {
    console.log( error.message );
});

ws.on( 'close', () => {
    console.log( 'end of writing' );
});