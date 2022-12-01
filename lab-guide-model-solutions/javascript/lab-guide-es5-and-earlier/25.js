// Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map)
var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: '620', type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: '450', type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: '430', type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: '910', type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: '430', type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: '610', type: 'new', manufacturer: 'Apple' },
];

// Print the name of each phone
phones.forEach(function( phone ) {
    console.log( phone.name );
});

// Create a new array with the name of each phone. Thus the new array that should be generated would be [ 'Samsung Galaxy S10+ Plus', 'Apple iPhone 7 Plus', ... ]
var phoneNames = phones.map(function( phone ) {
    return phone.name;
});
console.log( phoneNames );

// Create a new array with objects representing new phones
var newPhones = phones.filter(function( phone ) {
    return phone.type === 'new';
});
console.log( newPhones );

// Create a new array with objects with phone details, but price including tax
var phonesWithTax = phones.map(function( phone ) {
    return {
        name: phone.name,
        price: (phone.price * 1.1).toFixed( 2 ),
        type: phone.type,
        manufacturer: phone.manufacturer
    }
});
console.log( phonesWithTax );

// Find the first phone whose price is less than $440 and print the phone object.
var cheapPhone = phones.find(function( phone ) {
    return phone.price < 440;
});
console.log( cheapPhone );