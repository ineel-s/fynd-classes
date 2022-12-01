// an array of command line arguments
// console.log( process.argv );

const [ , , op, x, y ] = process.argv;

const intX = +x, intY = +y;

switch( op ) {
    case 'add':
        console.log( intX + intY );
        break;
    case 'subtract':
        console.log( intX - intY );
        break;
    case 'multiply':
        console.log( intX * intY );
        break;
    case 'divide':
        console.log( intX / intY );
        break;
    default:
        console.log( 'Unsupported operation. Operation must be one of add | subtract | multiply | divide' );
        process.exit( 1 );
}