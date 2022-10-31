// What is shallow copy? What is deep copy?
// Explore how you can create a shallow and deep copy of an object / array in JavaScript.
let x = 1;
let y = x; // copy by value (this is the behavior of assignment of primitives)

y++;

console.log( x, y );

const john = {
    name: 'John',
    age: 32
};

const jonathan = john; // copy by reference (john and jonathan refer to the same object in memory)

jonathan.age++;

console.log( john, jonathan );

const primes = [ 2, 3, 5, 7, 11 ];
const primesCopy = primes; // copy by reference

primesCopy.push( 13 );

console.log( primes, primesCopy );

function celebrateBirthday( person ) {
    person.age++;
}

celebrateBirthday( john ); // person = john
console.log( john ); // what is john's age?

function sum( x, y ) {
    return x + y;
}

const add = sum; // both add and sum refer to the SAME function in memory

console.log( add( 12, 13 ) );