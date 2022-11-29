console.log( 'a starts' );

const b = require( './03-b' );

// Module 03-c DOES NOT execute (because 03-b has already imported it and hence 03-c was already executed)
const c = require( './03-c' );

console.log( b, c );

console.log( 'a ends' );