// You can create objects without defining any class
// "Object literal" syntax
// data members -> properties / key-value pairs
const john = {
    name: 'John Doe',
    'company name': 'Fynd',
    age: 32,
    address: {
        city: 'Mumbai',
        pinCode: 400100
    },
    emails: [
        'john.doe@gmail.com',
        'john.doe@fynd.com'
    ]
};

let key = 'company name';
console.log( john.name );
console.log( 'company name = ', john['company name'] );
console.log( `${key} = `, john[key] );
console.log( john.address.city );
console.log( john.emails[1] );

john.emails.push( 'john.doe@fynd.academy' );

console.log( john );

// "objects are dynamic" - you can add and remove properties at runtime
// add a new property - spouse
john.spouse = {
    name: 'Jane Doe',
    age: 28
};

console.log( john );

delete john.age;

console.log( john );