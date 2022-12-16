const max = ( ...args ) => {
    return Math.max( ...args );
};

const numbers = [ 25, 65, 35, 75, 45 ];

// using spread to turn an array's items into arguments for max()
console.log( max( ...numbers ) ); // 75

// The same approach applied with the JS built-in Math.max() function
console.log( Math.max( ...numbers ) ); // 75