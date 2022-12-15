const mongoose = require( 'mongoose' );

// global configurations for queries
mongoose.set( 'returnOriginal', false );
mongoose.set( 'runValidators', true );

// create the models
require( '../models/User' );
require( '../models/Workshop' );

const {
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env;

const connect = async () => {
    try {
        await mongoose.connect( `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}` );
        console.log( 'conncted to the db' );
    } catch( error ) {
        console.log( error.message );
        throw error;
    }
};

module.exports = {
    connect
};