const fs = require( 'fs' );
const path = require( 'path' );
const zlib = require( 'zlib' );

const cssGuidePath = path.join( __dirname, 'css.pdf' );
const cssGuideZipPath = path.join( __dirname, 'css.pdf.zip' );

const rs = fs.createReadStream( cssGuidePath );
const gzip = zlib.createGzip();
const ws = fs.createWriteStream( cssGuideZipPath );

// the file is read using rs. When a chunk is read it is written to gzip stream ("a transform stream"). This will compress imcoming content and emit compressed data chunk. This data chunk is written to ws (the output file).
rs.pipe( gzip ).pipe( ws );

const onError = error => {
    console.log( error.message );
};

rs.on( 'error', onError );
gzip.on( 'error', onError );
ws.on( 'error', onError );