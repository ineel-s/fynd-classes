function sum( ...args ) {
    let result = 0;

    for( let i = 0; i < args.length; i++ ) {
        result += args[i];
    }

    return result;
}

var result = sum( 1, 2, 3, 4 );
console.log( result ); // prints 10

var result = sum( 1, 2, 3, 4, 5  );
console.log( result ); // prints 15