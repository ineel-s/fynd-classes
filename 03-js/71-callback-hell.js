const sum = ( x, y, callback ) => {
    setTimeout(
        () => {
            callback( x + y );
        },
        3000
    );
};

// Use sum once again to calculate the sum of result and 14 (and print it)
// Use sum yet again, to calculate the sum of the new result and 15 (and print it)
sum( 12, 13, ( result1 ) => {
    console.log( result1 );

    sum( result1, 14, ( result2 ) => {
        console.log( result2 );

        sum( result2, 15, ( result3 ) => {
            console.log( result3 );
        });
    });
});