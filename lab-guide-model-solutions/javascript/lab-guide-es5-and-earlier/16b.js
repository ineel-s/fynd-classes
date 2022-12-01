function map( arr, f ) {
    let result = [];

    for( let i = 0; i < arr.length; i++ ) {
        result.push( f( arr[i] ) );
    }

    return result;
}

function square( x ) {
    return x * x;
}


const result = map( [ 1, 2, 3 ], square ); // [ square( 1 ), square( 2 ), square( 3 ) ]; // [ 1, 4, 9 ]
console.log( result ); // [ 1, 4, 9 ]