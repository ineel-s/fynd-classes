const fs = require( 'fs' );
const path = require( 'path' );

const cssGuidePath = path.join( __dirname, 'css.pdf' );
const cssGuideCopyPath = path.join( __dirname, 'css.copy.pdf' );

const rs = fs.createReadStream( cssGuidePath, 'utf-8' );
const ws = fs.createWriteStream( cssGuideCopyPath );

// how to make a copy? Read chunk and write the chunk...