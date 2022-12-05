// CRUD: Create-Read-Update-Delete operations
/**
 * HTTP Method/verb     What is it used for?                    Example
 * GET                  Get a single itme, a list etc.          Get all workshops
 * POST                 Create a new resource                   Create a new workshop
 * PUT                  Update all the details of a resource    Update all the details of a workshop
 * PATCH                Update some details of a resource       Update name of a workshop
 * DELETE               Delete a resource                       Delete a workshop
 */

const workshops = require( '../../data/workshops.json' );

let nextId = 13;

// Controllers - Functions that read the request, and send the response
const getWorkshops = ( req, res ) => {
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

    const match = workshops.find( w => w.id === idInt );

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

    const workshop = {
        id: nextId,
        ...req.body
    };

    workshops.push( workshop );

    nextId++;

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

    const matchedIdx = workshops.findIndex( w => w.id === idInt );

    if( matchedIdx === -1 ) {
        res.status( 404 ).json({
            status: 'error',
            message: `A workshop with id = ${idInt} does not exist`
        });
        return;
    }

    const updatedWorkshop = {
        ...workshops[matchedIdx], // current details of the matched workhop
        ...req.body // new details (should be spread last)
    };

    // we need to replace workshop with updatedWorkshop
    workshops.splice( matchedIdx, 1, updatedWorkshop );

    res.json({
        status: 'success',
        data: updatedWorkshop
    });
};

module.exports = {
    getWorkshops,
    getWorkshop,
    postWorkshop,
    patchWorkshop
};