const greeting = ( message = 'Hello', name = 'World' ) => {
    console.log( `${message} ${name}!` );
};

greeting( 'Hello', 'World' );
greeting( 'Hello', 'John' );
greeting( 'Hello' );
greeting(); // Hello World!
greeting( undefined, 'John' ); // Hello John!