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