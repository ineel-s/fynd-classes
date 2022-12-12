const mongoose = require( 'mongoose' );

// create the models
require( '../models/Workshop' );

const connect = async () => {
    try {
        await mongoose.connect( `mongodb://localhost:27017/workshopsDB` );
        console.log( 'conncted to the db' );
    } catch( error ) {
        console.log( error.message );
        throw error;
    }
};

module.exports = {
    connect
};