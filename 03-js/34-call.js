'use strict';

/**
 * call(), apply(), bind() are method of any function
 */
function foo( x, y ) {
    console.log( x, y );

    console.log( 'foo this = ', this );

    const bar = () => {
        console.log( 'bar this = ', this );
    };

    bar.call( { x: 101 } ); // "this" setting is ignored
}

// foo(); // this -> global (Node) / window (browser)

// results in foo being called
foo.call( { x : 100 }, 12, 13 ); // it calls foo with the "this" set to { x : 100 }

foo.call(); // retains the original "this", x, y are both undefined