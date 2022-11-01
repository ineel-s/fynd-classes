const price = '123.35';

// parseInt or Number.parseInt()
const priceInt = parseInt( price );

console.log( priceInt );
console.log( typeof price ); // 'string'
console.log( typeof priceInt ); // 'number'

const priceFloat = parseFloat( price );
console.log( priceFloat );
console.log( typeof price ); // 'string'
console.log( typeof priceFloat ); // 'number'

const total = 123.355;
console.log( total.toFixed( 2 ) ); // returns a string

