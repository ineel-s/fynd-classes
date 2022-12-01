function exponentFactory( x ) {
    switch( x ) {
        case 2: 
            return function( n ) {
                return n * n;
            };
        case 3:
            return function( n ) {
                return n * n * n;
            };
        default:
            return function( n ) {
                return n;
            };
    }
}

var fn;

fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;

fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;

fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;