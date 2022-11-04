// There are 3 states a Promise object can be in
// Initially it is in "pending state"
// If the operation completes successfully it goes to "resolved state"
// Or, if the operation does not complete successfully it goes to "rejected state"
const sum = ( x, y ) => {
    return new Promise(
        ( resolve, reject ) => { // the constructor will call this function immediately
            console.log( 'about to call setTimeout...' );

            if( typeof x !== 'number' || typeof y !== 'number' ) {
                reject( new Error( 'at least one argument was not a number' ) );
                return; // error condition - do not proceed executing further
            }

            setTimeout(
                () => {
                    resolve( x + y );
                },
                3000
            );
        }
    );
};

let p = sum( 12, 'hello' );

console.log( 'about to call then...' );

p
    .then(
        ( result ) => { // called when p resolves
            console.log( result );
        }
    )
    .catch(
        ( error ) => { // called when p rejects
            console.log( error.message );
        }
    );

console.log( 'last line' );