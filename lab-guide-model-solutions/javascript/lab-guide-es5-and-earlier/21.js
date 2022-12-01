function foo() {
    console.log( this );
}

var boundFoo = foo.bind( { x: 1 } );
boundFoo();