// number
let qty = 10;
let moles = 6.023e23;
let g = 9.8;

// string
let name = 'John Doe';
let spouse = "Jane Doe";
let marriageMessage = name + ' weds ' + spouse;

// multi-line string
let weddingMessage = `
${name}
weds
${spouse}
on ${5 * 5}th of October
`; // template strings

console.log( marriageMessage );
console.log( weddingMessage );
console.log( weddingMessage.length );
console.log( weddingMessage[3] ); // 4th character

// boolean
let isWinter = true;
console.log( isWinter );