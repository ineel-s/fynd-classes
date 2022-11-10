const ajax = async ( url, method, requestBody, queryString = '' ) => {
    let options;

    if( queryString ) {
        // https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request
        const searchParams = new URLSearchParams( queryString ); // does URL encoding
        url = url + '?' + searchParams;
        console.log( url );
    }

    if( requestBody ) {
        options = {
            body: JSON.stringify( requestBody ),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    } else {
        options = {};
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

export default ajax;