// When we execute async functions serially, we can use async..await
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

// async function ALWAYS returns promise
const calculateSums = async () => {
    let result;
    
    console.log( 3 );
    
    // we are waiting on a Promise (we are waiting for the promise to resolve / reject)
    // the function calculateSum() gets "paused". The function will be "ready" to resume execution when the promise resolves / 
    try {
        result = await sum( 12, 13 ); // "1st pause" -> a promise p is return
        console.log( result );

        result = await sum( result, 14 ); // i give up control
        console.log( result );
        
        result = await sum( result, 15 ); // i give up control
        console.log( result );
    } catch( error ) {
        console.log( error.message );
    }

    console.log( 4 );

    return result; // this becomes the resolved value of p
};

console.log( 1 );

calculateSums()
    .then(
        result => console.log( 'final result = ', result )
    )
    .catch(
        error => console.log( error.message )
    );

console.log( 2 );

// > 3 seconds (on Prashanth's computer)
for( let i = 0; i < 1e10; i++ ) {
    ;
}

// nothing to do now!