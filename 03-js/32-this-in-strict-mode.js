'use strict';

console.log( this ); // window (browser) / something else (Node)

function foo1() {
    console.log( 'this in foo1 function (Strict mode)', this ); // undefined
    // this.x = 100;
}

foo1();