const { Errors } = require( '../constants' );

const resourceNotFound = ( req, res, next ) => {
    const error = new Error( 'API not supported' );
    error.name = 'NotFound';
    next( error );
};

// Express considers this as an error handling middleware because it has 4 formal parameters
const errorHandler = ( err, req, res, next ) => {
    // Not found
    if( err.name === Errors.NotFound ) {
        err.status = 404;
    }

    // validation failure
    if( err.name === Errors.ValidationError ) {
        err.status = 400;
    }

    // db error
    if( err.name === Errors.MongoServerError ) {
        err.status = 500
    }

    res.status( err.status || 500 ).json({
        status: 'error',
        message: err.message
    });
};

module.exports = {
    resourceNotFound,
    errorHandler
};