'use strict'; // enables "Strict mode of execution" - some extra checks are made like variables used without declaration etc.

// In JavaScript functions are "first-class citizens" -> functions can be used wherever objects can be used
// global
let x = 1;

console.log( 'x in global scope = ', x );

function outer() {
    let y = 2;
    
    // use strict
    // Y = 100; // unintentionally creates a new global variable Y

    console.log( 'x in outer scope = ', x );
    console.log( 'y in outer scope = ', y );

    // const john = {
    //     name: 'John'
    // };

    // inner can be used ONLY in outer function
    function inner() {
        let z = 3;
        console.log( 'x in inner scope = ', x );
        console.log( 'y in inner scope = ', y ); // inner function can use the outer function's variable
        console.log( 'z in inner scope = ', z );
    }

    inner();
    // console.log( 'z in outer scope = ', z ); // error
}

outer();

// console.log( 'y in global scope = ', y ); // error