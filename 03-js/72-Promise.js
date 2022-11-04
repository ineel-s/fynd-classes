const sum = ( x, y ) => {
    return new Promise(
        ( resolve ) => { // the constructor will call this function immediately
            console.log( 'about to call setTimeout...' );

            setTimeout(
                () => {
                    // Hey Promise object! Here is the result...
                    resolve( x + y );
                },
                3000
            );
        }
    );
};

let p = sum( 12, 13 );

console.log( 'about to call then...' );

// what should be done with the result? - let's tell the Promise object p
p.then(
    ( result ) => { // this is called  when the "p resolves"
        console.log( result );
    }
);

console.log( 'last line' );