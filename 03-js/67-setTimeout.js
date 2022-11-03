// The function passed to the environment (Node/browser) is never executed immediately - even if it is eligible for execution. Whenever the function is eligible for execution (timer has fired), it will get queued up in an "Event Queue" (a queue of function waiting to be executed)
setTimeout(
    () => {
        console.log( 1 );
    },
    0
);

console.log( 2 );

// JS environment if free checks the Event Queue -> it executes the functions sitting in the queue one-be-one