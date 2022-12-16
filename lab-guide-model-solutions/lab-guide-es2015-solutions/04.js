const max = ( ...args ) => { // gather arguments into an array
    // one approach is to use Math.max() - note that it does NOT accept an array
    return Math.max( ...args ); // spread it back to comma-separated arguments
    
    // alternative approach to find the max using Array's reduce method
    // return args.reduce( ( max, num ) => num > max ? num : max, args[0] );
};

console.log( max( 25, 65, 35, 45 ) ); // 65
console.log( max( 25, 65, 35, 75, 45 ) ); // 75