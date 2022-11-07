// Since we are not handling error (no try..catch), an error that is thrown will stop the function, and the promise returned by makeRequest (note that it is async and hence a promise is returned), will reject with that error.
const makeRequest = async ( url, method, requestBody, queryString = '' ) => {
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

// usually this data will be constructed when a form is submitted
const workshop = {
    "startDate": "2023-01-01T04:00:00.000Z",
    "endDate": "2023-01-05T08:00:00.000Z",
};

// Please put this code in an "async function and IIFE it" if you like
makeRequest( `https://workshops-server.herokuapp.com/workshops/12`, 'PATCH', workshop, '_page=1&workshop category=frontend' ) // this is using query string without URL encoding
    .then(
        data => console.log( data )
    )
    .catch(
        error => console.log( error.message )
    );