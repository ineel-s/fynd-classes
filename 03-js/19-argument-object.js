function foo( x, y ) {
    // the arguments object is "array-like"
    console.log( arguments );
    console.log( 'arguments[0] = ', arguments[0] );
    console.log( 'arguments[1] = ', arguments[1] );
    console.log( 'arguments[2] = ', arguments[2] );
    console.log( 'arguments.length = ', arguments.length );
}

foo( 12, 13 ); // { '0': 12, '1': 13 }
foo( 12 );
foo();

foo( 12, 13, 14 );