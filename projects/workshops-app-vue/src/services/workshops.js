import axios from 'axios';

const getWorkshops = async () => {
    const response = await axios.get( `http://workshops-server.herokuapp.com/workshops` );
    return response.data;
};

export {
    getWorkshops
};