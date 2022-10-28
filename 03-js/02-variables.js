// implicitly typed
var x = 1; // "number" data type

// we do not use var keyword to declare variables
// we use const / let
const PI = 3.1416; // const variables MUST be initialized

console.log( 'PI =', PI );

// if we uncomment this line, the script will throw an error and not execute after this line
// PI = 3.15; // error - const variables cannot be reassigned

let qty = 10;
qty++;

console.log( 'qty =', qty );

console.log( 'end of script' );

// let y = 1;