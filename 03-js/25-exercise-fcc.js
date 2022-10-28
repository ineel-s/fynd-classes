const sum = ( x, y, transform ) => transform( x ) + transform( y );

console.log( sum( 2, 3, x => x * x ) );
console.log( sum( 10, 100, Math.log10 ) );
console.log( sum( 25, 36, Math.sqrt ) );