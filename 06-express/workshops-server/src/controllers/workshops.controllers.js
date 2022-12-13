const WorkshopsService = require( '../services/workshops.services' );

const getWorkshops = async ( req, res ) => {
    let { page } = req.query;

    page = +page;

    if( !page || isNaN( page ) ) {
        page = 1;
    }

    const workshops = await WorkshopsService.getWorkshops( page );

    res.json({
        status: 'success',
        data: workshops
    });
};

const getWorkshop = async ( req, res, next ) => {
    const { id } = req.params;

    const match = await WorkshopsService.getWorkshopById( id );

    if( !match ) {
        const error = new Error( `A workshop with id = ${idInt} does not exist` );
        error.name = 'NotFound';
       
        // since we are passing an error object, the error handler middleware is called
        next( error );
        return;
    }

    res.json({
        status: 'success',
        data: match
    });
};

// You can do schema-based validation of request body/query string/path parameters using a library like Joi/express validtor
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

const patchWorkshop = ( req, res ) => {
    const { id } = req.params;

    const idInt = +id;

    if( isNaN( idInt ) ) {
        return res.status( 400 ).json({
            status: 'error',
            message: 'The workshop id must be a number'
        });
    }

    // if the req.body is an empty object
    if( Object.keys( req.body ).length === 0 ) {
        return res.status( 400 ).json({
            status: 'error',
            message: `Request body is missing, and needs to have the new workshop's details`
        });
    }

    const updatedWorkshop = WorkshopsService.updateWorkshop( idInt, req.body );

    if( updatedWorkshop === null ) {
        res.status( 404 ).json({
            status: 'error',
            message: `A workshop with id = ${idInt} does not exist`
        });
        return;
    }

    res.json({
        status: 'success',
        data: updatedWorkshop
    });
};

const deleteWorkshop = ( req, res ) => {
    const { id } = req.params;

    const idInt = +id;

    if( isNaN( idInt ) ) {
        return res.status( 400 ).json({
            status: 'error',
            message: 'The workshop id must be a number'
        });
    }

    const deletedWorkshop = WorkshopsService.deleteWorkshop( idInt );

    if( deletedWorkshop === null ) {
        res.status( 404 ).json({
            status: 'error',
            message: `A workshop with id = ${idInt} does not exist`
        });
        return;
    }

    // convention to pass 204 to convey success, but without explciit data sent in response body
    // res.status( 204 ).json();

    res.json({
        status: 'success',
        data: null
    });
};

module.exports = {
    getWorkshops,
    getWorkshop,
    postWorkshop,
    patchWorkshop,
    deleteWorkshop
};