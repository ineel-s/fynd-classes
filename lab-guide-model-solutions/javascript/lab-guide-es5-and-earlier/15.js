function sum( x, y, transform ) {
    return transform( x ) + transform( y );
}

function square( x ) {
    return x * x;
}

function cube( x ) {
    return x * x * x;
}

console.log( sum( 2, 3, square ) ); // prints 13
console.log( sum( 2, 3, cube ) ); // prints 35