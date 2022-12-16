const mongoose = require( 'mongoose' );
const Topic = mongoose.model( 'Topic' );
const Workshop = mongoose.model( 'Workshop' );

const getTopics = async ( workshopId ) => {
    let workshop;

    workshop = await Workshop.findById( workshopId );

    if( !workshop ) {
        const error = new Error( `Workshop not found` );
        error.name = 'NotFound';
        throw error;
    }

    if( workshop ) {
        const topics = await Topic.find({
            workshop: workshopId
        });
        return topics;
    }
};

const addTopic = async ( topic ) => {
    let workshop;

    try {
        workshop = await Workshop.findById( topic.workshop );

        if( workshop ) {
            const insertedTopic = await Topic.create( topic );
            return insertedTopic;
        }
    } catch( error ) {
        if( error.name === 'ValidationError' ) {
            const dbError = new Error( `Validation error : ${error.message}` );
            dbError.name = 'ValidationError';
            throw dbError;
        }
        
        if( error.name === 'CastError' ) {
            const dbError = new Error( `Data type error : ${error.message}` );
            dbError.name = 'CastError';
            throw dbError;
        }
    }

    if( !workshop ) {
        const error = new Error( `Workshop not found` );
        error.name = 'ValidationError';
        throw error;
    }
};

module.exports = {
    addTopic,
    getTopics
};