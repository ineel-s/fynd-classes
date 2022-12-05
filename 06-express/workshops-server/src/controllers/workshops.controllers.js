// CRUD: Create-Read-Update-Delete operations
/**
 * HTTP Method/verb     What is it used for?                    Example
 * GET                  Get a single itme, a list etc.          Get all workshops
 * POST                 Create a new resource                   Create a new workshop
 * PUT                  Update all the details of a resource    Update all the details of a workshop
 * PATCH                Update some details of a resource       Update name of a workshop
 * DELETE               Delete a resource                       Delete a workshop
 */
const WorkshopsService = require( '../services/workshops.services' );

// Controllers - Functions that read the request, and send the response
const getWorkshops = ( req, res ) => {
    const workshops = WorkshopsService.getWorkshops();

    res.json({
        status: 'success',
        data: workshops
    });
};

const getWorkshop = ( req, res ) => {
    const { id } = req.params;

    const idInt = +id;

    if( isNaN( idInt ) ) {
        // 400 -> Bad Request
        return res.status( 400 ).json({
            status: 'error',
            message: 'The workshop id must be a number'
        });
        // return; // do not continue further
    }

    const match = WorkshopsService.getWorkshopById( idInt );

    if( !match ) {
        res.status( 404 ).json({
            status: 'error',
            message: `A workshop with id = ${idInt} does not exist`
        });
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
const postWorkshop = ( req, res ) => {
    console.log( req.body ); // data sent in the request body

    // if the req.body is an empty object
    if( Object.keys( req.body ).length === 0 ) {
        return res.status( 400 ).json({
            status: 'error',
            message: `Request body is missing, and needs to have the new workshop's details`
        });
    }

    const workshop = WorkshopsService.addWorkshop( req.body );

    res.status( 201 ).json({
        status: 'success',
        data: workshop
    });
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