setTimeout(
    () => {
        setTimeout(
            () => {
                console.log( 4 );
            },
            4000
        );
    },
    0
);

console.log( 2 );

setTimeout(
    () => {
        console.log( 3 );
    },
    4000
);

// nothing to do - "Function call stack" is empty (explore function call stack)