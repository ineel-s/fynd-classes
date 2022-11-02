const numbers = [ 1, 2, 3, 4, 5, 6 ];

// search through an array
// another example - find an item - first even number
const match = numbers.find( ( item, index, array ) => item % 2 === 0 );
console.log( match );

const persons = [
    {
        name: 'Bob',
        age: 32
    },
    {
        name: 'Aaron',
        age: 40
    },
    {
        name: 'Charlie',
        age: 35
    },
    {
        name: 'Elena',
        age: 45
    },
    {
        name: 'Dave',
        age: 18
    }
];

// EXERCISE: First person who is at least 40 years old
const firstPerson40 = persons.find( person => person.age >= 40 );
console.log( firstPerson40 );

// filtering an array - all even number
// we get an array of all matched items (the filter iterator function should returns a boolean)
const matches = numbers.filter( item => item % 2 === 0 );
console.log( matches ); // [ 2, 4, 6 ]

// EXERCISE: find out all people whose name starts with 'A', 'B', 'C'
const abcPersons = persons.filter( person => person.name[0] <= 'C' );
console.log( abcPersons );

// transformed array (mapped array)
const squares = numbers.map( item => item * item );
console.log( squares );

// EXERCISE: Generate an array with the names of the persons
// output -> [ 'Bob', 'Aaron', ... ]
const personNames = persons.map( p => p.name );
console.log( personNames );

// iterate through the array - forEach
// numbers.forEach( ( item, idx, array ) => array[idx]++ );
numbers.forEach( item => console.log( item ) );
console.log( numbers );

// EXERCISE: Use forEach to increase the age of every person in the persons array
persons.forEach( p => p.age++ );
console.log( persons );

// BAD USE CASE FOR USING forEach - we can use filter instead
// const evens = [];

// numbers.forEach( ( item, idx ) => {
//     if( item % 2 === 0 ) {
//         evens.push( item );
//     }
//     // console.log( item, idx );
// });

// console.log( evens );

// you want an "aggregate value" - a single value that summarizes the array
// const numbers = [ 1, 2, 3, 4, 5, 6 ];
// iteration 1: acc = 0, item = 1 => 0 + 1 = 1 (new value for acc)
// iteration 2: acc = 1, item = 2 => 1 + 2 = 3 (new value for acc)
// iteration 3: acc = 3, item = 3 => 3 + 3 = 6 (new value for acc)
// iteration 4: acc = 6, item = 4 => 6 + 4 = 10 (new value for acc)
// iteration 5: acc = 10, item = 5 => 10 + 5 = 15 (new value for acc)
// iteration 6: acc = 15, item = 6 => 15 + 6 = 21 (new value for acc)
// reduce returns 21 (final value for acc)
const sum = numbers.reduce( ( acc, item ) => acc + item, 0 );
console.log( 'sum =', sum );

// EXERCISE: Find out the maximum age of persons using reduce
const maxAge = persons.reduce( ( maxAge, p ) => Math.max( maxAge, p.age ), 0 )
console.log( maxAge );