const WorkshopsService = require( '../services/workshops.services' );
const { Errors } = require( '../constants' );

// GET /workshops?page=2
const getWorkshops = async ( req, res, next ) => {
    console.log( 'controller : ', res.locals.claims );
    let { page } = req.query;

    page = +page;

    if( !page || isNaN( page ) ) {
        page = 1;
    }

    try {
        const workshops = await WorkshopsService.getWorkshops( page );

        res.json({
            status: 'success',
            data: workshops
        });
    } catch( error ) {
        next( error );
    }
};

// GET /workshops/:id
const getWorkshop = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const match = await WorkshopsService.getWorkshopById( id );

        if( !match ) {
            const error = new Error( `A workshop with id = ${id} does not exist` );
            error.name = Errors.NotFound;
        
            // since we are passing an error object, the error handler middleware is called
            next( error );
            return;
        }

        res.json({
            status: 'success',
            data: match
        });
    } catch( error ) {
        next( error );
    }
};

// You can do schema-based validation of request body/query string/path parameters using a library like Joi/express-validator
// https://joi.dev/api/?v=17.7.0
// https://express-validator.github.io/docs/
const postWorkshop = async ( req, res, next ) => {
    if( Object.keys( req.body ).length === 0 ) {
        return res.status( 400 ).json({
            status: 'error',
            message: `Request body is missing, and needs to have the new workshop's details`
        });
    }

    try {
        const workshop = await WorkshopsService.addWorkshop( req.body );

        res.status( 201 ).json({
            status: 'success',
            data: workshop
        });
    } catch( error ) {
        next( error );
    }
};

const patchWorkshop = async ( req, res, next ) => {
    const { id } = req.params;

    // if the req.body is an empty object
    if( Object.keys( req.body ).length === 0 ) {
        const error = new Error( `Request body is missing, and needs to have the new workshop's details` );
        error.name = Errors.BadRequest;
        return next( error );
    }

    try {
        const updatedWorkshop = await WorkshopsService.updateWorkshop( id, req.body );

        if( updatedWorkshop === null ) {
            const error = new Error( `A workshop with id = ${id} does not exist` );
            error.name = Errors.NotFound;
            
            return next( error );
        }

        res.json({
            status: 'success',
            data: updatedWorkshop
        });
    } catch( error ) {
        next( error );
    }
};

const deleteWorkshop = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const deletedWorkshop = await WorkshopsService.deleteWorkshop( id );

        if( deletedWorkshop === null ) {
            const error = new Error( `A workshop with id = ${id} does not exist` );
            error.name = Errors.NotFound;
            return next( error );
        }

        // convention to pass 204 to convey success, but without explicit data sent in response body
        // res.status( 204 ).json();

        res.json({
            status: 'success',
            data: null
        });
    } catch( error ) {
        next( error );
    }
};

module.exports = {
    getWorkshops,
    getWorkshop,
    postWorkshop,
    patchWorkshop,
    deleteWorkshop
};