import axios from 'axios';
import Config from '@/config';

const getWorkshops = async () => {
    const response = await axios.get( `${Config.baseUrl}/workshops` );
    return response.data;
};

const getWorkshopById = async ( id ) => {
    const response = await axios.get(
        `${Config.baseUrl}/workshops/${id}`,
        {
            params: { // this will do URL-encoding
                _embed: 'sessions' // ?_embed=sessions
            },
            // watch the https://www.one-tab.com/page/dHcBWignRr2nsHxV_P0KXw to implement authentication using Vuex store
            // headers: {
            //     Authorization: ''
            // }
        }
    );
    return response.data;
}

export {
    getWorkshops,
    getWorkshopById
};