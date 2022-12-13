const mongoose = require( 'mongoose' );
const workshops = require( '../../data/workshops.json' );
const { PAGE_SIZE } = require( '../config' );

const Workshop = mongoose.model( 'Workshop' );

let nextId = 13;

const getWorkshops = ( page ) => {
    // find returns a Promise
    // return Workshop.find().skip( ( page - 1 ) * PAGE_SIZE ).limit( PAGE_SIZE );
    const query = Workshop.find();
    
    query
        .skip( ( page - 1 ) * PAGE_SIZE )
        .limit( PAGE_SIZE );

    return query.exec(); // I think - return query; is sufficient
};

const getWorkshopById = ( _id ) => {
    // return Workshop.findOne({
    //     // _id: _id
    //     _id
    // });
    return Workshop.findById( _id );
};

const addWorkshop = ( newWorkshopDetails ) => {
    return Workshop.create( newWorkshopDetails );
};

const updateWorkshop = ( id, workshopDetails ) => {
    /*
        1. By default, the data passed (workshopDetails) is put within $set
        {
            $set: workshopDetails
        }
        2. By default, the existing workshop document shall be the resolved value
        3. By default, no validation checks are done on update
    */
    return Workshop.findByIdAndUpdate( id, workshopDetails );
};

const deleteWorkshop = ( idInt ) => {
    const matchedIdx = workshops.findIndex( w => w.id === idInt );

    if( matchedIdx === -1 ) {
        return null;
    }

    const deletedWorkshop = workshops[matchedIdx];

    workshops.splice( matchedIdx, 1 );

    return deletedWorkshop;
};

module.exports = {
    getWorkshops,
    getWorkshopById,
    addWorkshop,
    updateWorkshop,
    deleteWorkshop
};