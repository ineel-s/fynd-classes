// IIFE -> Immediately Invoked Function Expression (IIFE) - define the function and immediately call it
// We can totally avoid creating global variables using IIFE - by writing all the code in an IIFE
(async ( x, y ) => {
    try {
        const response = await fetch( `https://workshops-server.herokuapp.com/workshops` );

        if( !response.ok ) {
            throw new Error( response.statusText );
        }

        const data = await response.json();
        console.log( data );
    } catch( error ) {
        console.log( error.message )
    }
})( 12, 13 ); // the arguments passed are just for demo and not used in this script otherwise