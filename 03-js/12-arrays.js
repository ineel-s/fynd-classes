// Explore : Multi-dimensional arrays

const primes = [ 2, 3, 5, 7, 11, 'Thirteen' ];

console.log( primes[0] );
console.log( primes[1] );
console.log( primes[5] );
// console.log( primes[5].length );
console.log( primes[6] ); // undefined
console.log( 'array length =', primes.length );

// console.log( primes[-1] ); // gives undefined -> not like Python!

console.log( typeof primes ); // "object"

// primes = [ 1, 2, 3 , 4, 5 ]; // not allowed -> assignment is NOT allowed for const

primes[primes.length] = 17; // add item at the end
primes.push( 19 ); // add item at the end - this is preferred

console.log( primes );