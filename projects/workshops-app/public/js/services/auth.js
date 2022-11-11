// We shall place all authentication-related API calls here
import ajax from '../utils/ajax.js';

export const KEY_EMAIL = 'email';
export const KEY_ROLE = 'role';
export const KEY_TOKEN = 'token';

/**
 * 
 * @param {object} credentials An object with login credentials - Eg. { "email": "john.doe@example.com", "password": "Password123#" }
 * @returns A Promise which resolves with the data sent by the login API
 */
const login = async ( credentials ) => {
    const data = await ajax( `http://localhost:8001/login`, 'POST', credentials );

    // store received data in localStorage
    localStorage.setItem( KEY_EMAIL, data.email );
    localStorage.setItem( KEY_ROLE, data.role );
    localStorage.setItem( KEY_TOKEN, data.authToken );

    return data;
};

export {
    login
};