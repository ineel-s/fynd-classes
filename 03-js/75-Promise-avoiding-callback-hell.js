const sum = ( x, y ) => {
    return new Promise(
        ( resolve, reject ) => {
            if( typeof x !== 'number' || typeof y !== 'number' ) {
                return reject( new Error( 'at least one argument was not a number' ) );
            }

            setTimeout( () => resolve( x + y ), 3000 );
        }
    );
};

// Use sum once again to calculate the sum of result and 14 (and print it)
sum( 12, 13 ) // p
    .then(
        ( result1 ) => {
            console.log( result1 );

            // if we return a promise from this function, we can chain the then like below
            return sum( result1, 'hello' ); // q
        }
    )
    .then(
        ( result2 ) => { // this function executes when q resolves
            console.log( result2 );

            return sum( result2, 15 );
        }
    )
    .then(
        ( result3 ) => {
            console.log( result3 );
        }
    )
    .catch(
        ( error ) => { // this function executes when p / q rejects
            console.log( error.message );
        }
    );