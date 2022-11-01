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

// you want an "aggregate value" - a single value that summarizes the array