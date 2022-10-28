let city = 'Mumbai';

if( city === 'Mumbai' ) {
    console.log( 'Marine Drive' );
}

city = 'New Delhi';

if( city === 'Mumbai' ) {
    console.log( 'Marine Drive' );
} else {
    console.log( 'India gate' );
}

city = 'Bengaluru';

if( city === 'Mumbai' ) {
    console.log( 'Marine Drive' );
} else if( city === 'New Delhi' ) {
    console.log( 'India gate' );
} else if( city === 'Bengaluru' ) {
    console.log( 'Cubbon Park' );
}
