/**
 * Service for fetching list of sessions, adding session etc.
 */
import axios from 'axios';
import Config from '@/config';

const apiBaseUrl = Config.baseUrl;

const vote = async ( voteType, sessionId ) => {
    const response = await axios.put( `${apiBaseUrl}/sessions/${sessionId}/${voteType}` );
    return response.data;
};

const addSession = async ( newSessionDetails ) => {
    const response = await axios.post(
        `${apiBaseUrl}/sessions`,
        newSessionDetails,
        // watch the https://www.one-tab.com/page/dHcBWignRr2nsHxV_P0KXw to implement authentication using Vuex store
        // headers: {
        //     Authorization: ''
        // }
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
};

export {
    vote,
    addSession
}