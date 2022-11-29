const fs = require( 'fs' );
const path = require( 'path' ); // to create platform-independent file path (Windows/Linux/Mac)

// Note: double underscore
// absolute path to the folder where this file is
console.log( __dirname );

// absolute path to this file
console.log( __filename );

const packagePath = path.join( __dirname, '..', 'package.json' );

// asynchronous, non-blocking function
// the callback is called once file is read / there was an error reading the file
// if error -> 1st argument will represent the error
// if success -> 2nd argument will have contents of the file (raw bytes by default - Buffer)

// fs.readFile( packagePath, ( error, contents ) => {
//     if( error ) {
//         console.log( error.message );
//         return; // stop execution as it was error
//     }

//     // console.log( contents.toString( 'utf-8' ) ); // assumes 'utf-8' -> so actually we need not even pass it
// } );

// we can pass 2nd argument -> 'utf-8' (encoding)
// we can padd 3rd argument -> callback function
// contents will now be actual text contents (not bytes)
fs.readFile( packagePath, 'utf-8', ( error, contents ) => {
    if( error ) {
        console.log( error.message );
        return; // stop execution as it was error
    }

    console.log( contents );
} );

console.log( 'last line of the script' );