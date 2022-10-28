function getter( keyChain ) {
    const keys = keyChain.split( '.' ); // [ 'address', 'city' ]

    return function( person ) {
        let temp = person;

        for( let i = 0; i < keys.length; i++ ) {
            const key = keys[i];
            temp = temp[key];
        }

        return temp;
    };
}

const john = {
    name: 'John',
    age: 32,
    spouse: 'Jane',
    address: {
        city: 'Mumbai',
        pinCode: 400100
    }
};

const jane = {
    name: 'Jane',
    age: 28,
    spouse: 'John',
    address: {
        city: 'New Delhi',
        pinCode: 100100
    }
};

const city = getter( 'address.city' );

console.log( city( john ) );
console.log( city( jane ) );