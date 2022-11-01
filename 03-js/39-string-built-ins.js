// Number, String, Boolean - classes which wrap primitive number, string, boolean
const quote = 'An apple a day keeps the doctor away';

// strings are immutable - we cannot change strings
// a new string with the replacement is returned
// replaces the first occurence of the word 'day' (we can replace ALL occurences using a regexp pattern instead of string 'day')
const newQuote = quote.replace( 'day', 'week' );

console.log( newQuote );
console.log( quote );

const fruitInQuote = quote.substring( 3, 8 );
console.log( fruitInQuote );

console.log( quote.includes( 'apple' ) ); // true
console.log( quote.includes( 'banana' ) ); // false

console.log( quote.indexOf( 'apple' ) ); // 3
console.log( quote.indexOf( 'banana' ) ); // -1

console.log( quote.toUpperCase() );
console.log( quote.toLowerCase() );

console.log( '    John Doe   ' );
console.log( '    John Doe   '.trim() );

const words = 'Hello world. How are you?'.split( ' ' );
console.log( words );