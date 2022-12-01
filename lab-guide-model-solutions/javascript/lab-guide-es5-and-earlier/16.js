function sumArray( arr, fn ) {
    let result = 0;

    for( let i = 0; i < arr.length; i++ ) {
        result += fn( arr[i] );
    }

    return result;
}

function square( x ) {
    return x * x;
}

function cube( x ) {
    return x * x * x;
}

sumArray( [ 1, 2, 3 ], square ); // square( 1 ) + square( 2 ) + square( 3 )
sumArray( [ 1, 2, 3, 4 ], square ); // square( 1 ) + square( 2 ) + square( 3 ) + square( 4 )
sumArray( [ 1, 2, 3, 4 ], cube ); // cube( 1 ) + cube( 2 ) + cube( 3 ) + cube( 4 )