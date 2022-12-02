const workshops = require( '../../data/workshops.json' );

let nextId = 13;

// Controllers - Functions that read the request, and send the response
const getWorkshops = ( req, res ) => {
    res.json({
        status: 'success',
        data: workshops
    });
};

const postWorkshops = ( req, res ) => {
    console.log( req.body ); // data sent in the request body

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

module.exports = {
    getWorkshops,
    postWorkshops
};