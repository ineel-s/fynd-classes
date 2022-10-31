/**
 * call(), apply(), bind() are method of any function
 */
function foo() {
    console.log( this );
}

// foo(); // this -> global (Node) / window (browser)

// results in foo being called
foo.call( { x : 100 } ); // it calls foo with the "this" set to { x : 100 }