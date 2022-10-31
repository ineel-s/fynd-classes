// context -> "this" keyword refers to the context

// "this" will refer to a variable that JS considers helpful for the piece of code
console.log( this ); // window object (in browser) / something else (in Node)

// #1, #2 -> the value of "this" gets set when the function is called

// #1: function declaration syntax
function foo1() {
    console.log( 'this in foo1 function', this ); // window object (in browser) / global object (in Node)
    // this.x = 100;
}

foo1();

// #2: function expression (JS follows the SAME rules as #1
const foo2 = function() {
    console.log( 'this in foo2 function', this ); // window object (in browser) / global object (in Node)
    // console.log( 'this.x within foo2 = ', this.x );
};

foo2();

// #3: arrow function - it does not have its own "this" set. It borrows the "this" from the enclosing scope
const foo3 = () => {
    console.log( 'this in foo3 function', this ); // window object (in browser) / something else (in Node)
};

foo3();