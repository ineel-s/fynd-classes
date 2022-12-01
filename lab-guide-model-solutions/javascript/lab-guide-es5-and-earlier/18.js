// Write a function addTo() that accepts a number x. addTo() returns a function that accepts a number y and returns the sum of x and y. Call the addTo() function few times, and then the returned function, and log the result.
function addTo( x ) {
    return function( y ) {
        return x + y;
    };
}

var addTo10 = addTo( 10 );
console.log( addTo10( 5 ) ); // prints 15
console.log( addTo10( 7 ) ); // prints 17

var addTo20 = addTo( 20 );
console.log( addTo20( 5 ) ); // prints 25
console.log( addTo20( 7 ) ); // prints 27