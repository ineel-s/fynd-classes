// setTimeout is a non-blocking function
setTimeout(
    () => { // Node JS / browser will receive this function from setTimeout
        console.log( 1 );
    },
    4000 // 4000 milliseconds -> 4 seconds
);

console.log( 2 );

setTimeout(
    () => {
        console.log( 3 )
    },
    5000
);

console.log( 4 );