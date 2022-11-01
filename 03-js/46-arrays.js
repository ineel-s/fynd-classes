let primes = [ 5, 7, 11, 13, 17 ];

primes.push( 19, 23 ); // "mutates" the primes array

console.log( primes );

const poppedNum = primes.pop();
console.log( poppedNum ); // 23
console.log( primes );

// remove from the beginning
const removedNum = primes.shift();
console.log( removedNum ); // 5
console.log( primes );

// add to the beginning
primes.unshift( 2, 3, 5 );
console.log( primes );

// splice - add / remove from anywhere
primes = [ 2, 3, 5, 7, 11, 13, 23, 29 ];
primes.splice( 5, 2, 'Thirteen', 'Seventeen', 19 ); // removes 2 items from index 5 - [ 2, 3, 5, 7, 11, 'Thirteen', 'Seventeen', 19, 29 ]
console.log( primes );

primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];

console.log( primes.includes( 11 ) );
console.log( primes.includes( 12 ) );

console.log( primes.indexOf( 11 ) ); // 4
console.log( primes.indexOf( 12 ) ); // -1

const biggerArray = primes.concat( primes, [ 31, 37 ] );
console.log( biggerArray );

primes.reverse();
console.log( primes );

const words = [ 'Hello', 'world.', 'How', 'are', 'you?' ];
console.log( words.join( ' ' ) );

// Form a string with characters reversed - try to use what we just learnt
// output -> 'dlrow ,olleH'
const greeting = 'Hello, world';
console.log( greeting.split( '' ).reverse().join( '' ) );