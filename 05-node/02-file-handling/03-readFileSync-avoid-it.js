const fs = require( 'fs' );
const path = require( 'path' );

const packagePath = path.join( __dirname, '..', 'package.json' );

try {
    // readFileSync is a synchrnous, blocking function. Till the file is read, the execution of our code will not proceed. We are wasting time till the file is read.
    const contents = fs.readFileSync( packagePath, 'utf-8' );
    console.log( contents );
} catch( error ) {
    console.log( error.message );
}

console.log( 'last line of the script' );