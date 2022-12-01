function filter( arr, f ) {
    let result = [];

    for( let i = 0; i < arr.length; i++ ) {
        if( f( arr[i] ) ) {
            result.push( arr[i] );
        }
    }

    return result;
}

function square( x ) {
    return x * x;
}

function isOdd( x ) {
    return x % 2 === 1;
}
let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ); // [ 1, 3, 5, 7 ]

console.log( filteredList );