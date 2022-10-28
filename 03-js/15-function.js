console.log( sum1( 12, 13 ) );

// function declaration syntax
function sum1( x, y ) {
    const result = x + y;

    return result;
}

// console.log( sum2( 12, 13 ) ); // error

// function expression syntax
// The RHS is a function expression - it creates a function dynamically
const sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 12, 13 ) );

// arrow function syntax (ES2015)
const sum3 = ( x, y ) => {
    return x + y;
};

console.log( sum3( 12, 13 ) );

// if the function has a single line which returns something
const sum4 = ( x, y ) => x + y;

console.log( sum4( 12, 13 ) );

// single-argument arrow functions need not have () around the single argument
const sq = x => x * x;

console.log( sq( 12 ) );