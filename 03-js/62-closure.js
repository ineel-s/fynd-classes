const outer = ( x ) => {
    return ( y ) => {
        console.log( x, y );
        x++; // x is NOT local
        y++; // y is local to this inner function - it gets destroyed every time
    };
};

// a variable from the outer scope - i.e. x is remembered by f
const f = outer( 10 ); // x1
f( 0 );
f( 0 );
f( 0 );
f( 0 );
f( 0 );

const g = outer( 20 ); // x2
g( 0 );
g( 0 );
g( 0 );
g( 0 );
g( 0 );