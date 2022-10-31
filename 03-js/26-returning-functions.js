function getter( key ){
    // return {
    //     name: 'John',
    //     age: 32
    // };

    return function( person ) {
        return person[key];
    };
}

const john = {
    name: 'John',
    age: 32,
    spouse: 'Jane'
};

const jane = {
    name: 'Jane',
    age: 28,
    spouse: 'John'
};

const getName = getter( 'name' );
console.log( getName( john ) );
console.log( getName( jane ) );

const age = getter( 'age' );
console.log( age( john ) );
console.log( age( jane ) );

// getter().name; // no objection