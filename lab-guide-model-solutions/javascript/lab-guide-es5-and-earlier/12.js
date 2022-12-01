function sumSquares( array ) {
    var sum = 0;
    
    for( var i = 0; i < array.length; i++ ) {
        sum = sum + ( array[i] * array[i] );
    }

    return sum;
}

console.log( sumSquares( [ 1, 2, 3, 4 ] ) );