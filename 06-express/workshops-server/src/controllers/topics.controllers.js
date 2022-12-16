const TopicsService = require( '../services/topics.services' );
const { Errors } = require( '../constants' );

const postTopic = async ( req, res, next ) => {
    const topic = req.body;
    
    try {
        let updatedTopic = await TopicsService.addTopic( topic );
        
        res.status( 201 ).json({
            status: 'success',
            data: updatedTopic
        });
    } catch( error ) {
        error.name = Errors.BadRequest;
        next( httpError );
    }
};

module.exports = {
    postTopic
}