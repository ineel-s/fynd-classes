// ... (5 overloads) - rest (3 scenarios), spread operators (2 scenarios)

// Scenario #1: to collect "rest of the arguments" in a function
// the ... can be used only with the last argument in the function
const add = ( x, y, ...z ) => {
    console.log( z );

    return x + y;
};

console.log( add( 12, 13, 14, 15, 16, 17 ) ); // z = [ 14, 15, 16, 17 ]

// EXERCISE: Write a function that will return the sum of all numbers passed to it. It can accept any number of arguments.
// console.log( sum( 12, 13 ) ); // 25
// console.log( sum( 12, 13, 14 ) ); // 39
// console.log( sum( 12, 13, 14, 15 ) ); // 54
// your code...

// Scenario #2: Used during array destructuring, to gather "rest of the items in the array"
const weekdays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

const [ mon, , wed, ...restOfDays ] = weekdays;
console.log( restOfDays ); // [ 'Thu', 'Fri' ]

// Scenario #3: Used during object destructuring, to gather "rest of key-value pairs into an object"
const john = {
    name: 'John Doe',
    'company name': 'Fynd',
    age: 32,
    address: {
        city: 'Mumbai',
        area: 'Mulund',
        pinCode: 400100
    },
    emails: [
        'john.doe@gmail.com',
        'john.doe@fynd.com'
    ]
};

const {
    name,
    address: {
        city,
        ...restOfAddress // { ... }
    },
    ...restOfJohnDetails // { ... }
} = john;

console.log( restOfJohnDetails, restOfAddress );