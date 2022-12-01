// Write a function that accepts another function and calls the accepted function.
function acceptAndCall( fn ) {
    fn();
}

acceptAndCall( 
    function() {
        console.log( "hello" );
    }
);

acceptAndCall(
    function() {
        console.log( 'bye' );
    }
);