const fs = require( 'fs/promises' );
const path = require( 'path' );

const packagePath = path.join( __dirname, '..', 'package.json' );

// readFile returns a promises
// EXERCISE: Rewrite this in an async function
fs.readFile( packagePath, 'utf-8' )
    .then( contents => {
        console.log( contents );
    })
    .catch(error => {
        console.log( error.message );
    });

console.log( 'last line of the script' );