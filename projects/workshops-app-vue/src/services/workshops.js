import axios from 'axios';

const getWorkshops = async () => {
    const response = await axios.get( `http://workshops-server.herokuapp.com/workshops` );
    return response.data;
};

const getWorkshopById = async ( id ) => {
    const response = await axios.get(
        `https://workshops-server.herokuapp.com/workshops/${id}`,
        {
            params: { // this will do URL-encoding
                _embed: 'sessions' // ?_embed=sessions
            }
        }
    );
    return response.data;
}

export {
    getWorkshops,
    getWorkshopById
};