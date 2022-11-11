import { KEY_TOKEN } from "../services/auth.js";

const ajaxWithAuth = ( url, method, requestBody, queryString = '' ) => {
    return ajax( url, method, requestBody, queryString, {
        'Authorization': `Bearer ${localStorage.getItem( KEY_TOKEN )}`
    });
};

const ajax = async ( url, method, requestBody, queryString = '', headers ) => {
    let options = {};

    if( queryString ) {
        // https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request
        const searchParams = new URLSearchParams( queryString ); // does URL encoding
        url = url + '?' + searchParams;
        console.log( url );
    }

    if( requestBody ) {
        options = {
            ...options,
            body: JSON.stringify( requestBody ),
        }
    }

    if( headers ) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        }
    }

    // we are updating the workshop with id = 12
    const response = await fetch( 
        url,
        {
            method: method, // always use uppercase for safety
            ...options // spread options object to copy over the keys (if exists)
        }
    );

    if( !response.ok ) {
        throw new Error( response.statusText );
    }

    const data = await response.json();
    return data;
}

export {
    ajaxWithAuth,
    ajax as default
};