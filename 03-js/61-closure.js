// Closure: The set of variables in scope for a function is the function's closure
const outer = ( x ) => {
    // LEXICAL SCOPING: this function shall be able to access ALL the variables in its scope at the place it was created
    return ( y ) => {
        console.log( x, y );
    };
};

// Generally a function's local variables are alive as long as the function is executing
// In JavaScript, the local variables in outer function, will be kept alive if there is an locally created (inner) function being returned (or available after the outer function executes) -> because the inner function is available even after outer executes, x will be kept in memory
const f = outer( 12 ); // outer function completed execution on this line
f( 13 ); // 12 13