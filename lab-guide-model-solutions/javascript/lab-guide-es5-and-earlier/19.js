var John = {
    name: 'John',
    age: 32
};

var Jane = {
    name: 'Jane',
    age: 28
};

John.address = {
    "first line": "#32, Rosewell",
    city: 'New York'
};

John.spouseName = Jane;
Jane.spouseName = John;

Jane.emailids = [
    'jane@gmail.com',
    'jane@yahoo.com'
];

console.log( Jane.emailids[1] );

Jane.emailids[1] = 'jane@danske.com';
console.log( Jane.emailids[1] );

Jane.emailids.push( 'jane@example.com' );
console.log( Jane );

// we shall set this function to celebrateBirthday property on John and Jane objects
function celebrateBirthday() {
    this.age++;
}

// John.celebrateBirthday = function() {
//     this.age++;
// };

John.celebrateBirthday = celebrateBirthday;

// Jane.celebrateBirthday = function() {
//     this.age++;
// };

Jane.celebrateBirthday = celebrateBirthday;

John.celebrateBirthday(); // context will be John
Jane.celebrateBirthday(); // context is Jane
// celebrateBirthday(); // context is window

