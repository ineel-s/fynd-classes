const workshops = require( '../../data/workshops.json' );
const { PAGE_SIZE } = require( '../config' );

let nextId = 13;

// In a real app, a query to the database would have been made in this method
const getWorkshops = ( page ) => {
    const pagedWorkshops = workshops.slice( ( page - 1 ) * PAGE_SIZE, page * PAGE_SIZE )
    return {
        workshops: pagedWorkshops,
        total: workshops.length
    };
};

const getWorkshopById = ( idInt ) => {
    return workshops.find( w => w.id === idInt );
};

const addWorkshop = ( newWorkshopDetails ) => {
    const workshop = {
        id: nextId,
        ...newWorkshopDetails
    };

    workshops.push( workshop );

    nextId++;

    return workshop;
};

const updateWorkshop = ( idInt, workshopDetails ) => {
    const matchedIdx = workshops.findIndex( w => w.id === idInt );

    if( matchedIdx === -1 ) {
        return null;
    }

    const updatedWorkshop = {
        ...workshops[matchedIdx], // current details of the matched workhop
        ...workshopDetails // new details (should be spread last)
    };

    // we need to replace workshop with updatedWorkshop
    workshops.splice( matchedIdx, 1, updatedWorkshop );

    return updatedWorkshop;
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