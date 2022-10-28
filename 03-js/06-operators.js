console.log( 13 / 5 );
console.log( 13 % 5 );

// shortcut assignment
let x = 10;
// x = x + 5
x += 5;

console.log( 'x = ', x );

// relational operator - >, <, >=, <=, ==, !=, === (strict equality), !==
// AVOID USING ==
console.log( 1 == '1' ); // true
console.log( 1 === '1' ); // false

// logical operators
// !, &&, ||

// ? :
// condition ? on_true : on_false
let day = 'Friday';
console.log( ( day !== 'Saturday' && day !== 'Sunday' ) ? 'Work' : 'Party' );