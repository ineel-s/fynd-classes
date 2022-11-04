const sum = ( x, y, callback ) => {
    setTimeout(
        () => { // who calls this function? Node / browser (the environment)
            let result = x + y;
            // return result; // returning is useless!
            callback( result );
        },
        3000
    );

    // return undefined;
};

sum( 12, 13, ( result ) => {
    console.log( result );
});

sum( 14, 15, ( result ) => {
    console.log( result * 2 );
});