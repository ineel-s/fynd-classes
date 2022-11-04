const f = async () => {
    console.log( 'f running' );
    await Promise.resolve( 'resolved value' );
    console.log( 'f about to return' );
};

const g = () => console.log( 'g running' );

f();
g();