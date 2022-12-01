function contains( array, key ) {
    for( var i = 0; i < array.length; i++ ) {
        if( array[i] === key ) {
            return true;
        }
    }

    return false;
}

console.log( contains( [ 1, 2, 3, 4 ], 3 ) ); // prints true
console.log( contains( [ 1, 2, 3, 4 ], 5 ) ); // prints false