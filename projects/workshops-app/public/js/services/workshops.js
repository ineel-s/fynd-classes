import { ajaxWithAuth } from '../utils/ajax.js';

// We shall place all "workshops" resource related API calls here
const fetchWorkshops = async ( _page ) => {
    // return ajaxWithAuth( `https://workshops-server.herokuapp.com/workshops`, 'GET', null, `_page=${_page}` );
    return ajaxWithAuth( `http://localhost:8001/workshops`, 'GET', null, `_page=${_page}` );
};

const addWorkshop = () => {

};

export {
    fetchWorkshops,
    addWorkshop
};