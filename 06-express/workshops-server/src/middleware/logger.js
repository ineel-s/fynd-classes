// a middleware is a function that has to
// option 1. do something and send the response
// or
// option 2. do something and pass on control to the next middleware
const logger = ( req, res, next ) => {
    console.log( 'request is received (logger1)' );
    
    // option 1
    // res.json({
    //     data: 'I am logger 1'
    // });

    // option 2
    next();

    // called in the when response is being sent ("reverse direction")
    console.log( 'response is being sent (logger1)' );
};

const logger2 = ( req, res, next ) => {
    console.log( 'request is received (logger2)' );
    next();
    console.log( 'response is being sent (logger2)' );
};

module.exports = {
    logger,
    logger2
};