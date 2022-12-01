function sum( x, y ) {
    return x + y;
}

var addTo10 = sum.bind( null, 10 );
console.log( addTo10( 100 ) );

var add10And20 = sum.bind( null, 10, 20 );
console.log( add10And20() );