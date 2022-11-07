// It returns a promise, after initiating a request for the resource goes out, and when the response comes back to the browser, the promise resolves

// Explore: What is JSON.parse(), and JSON.stringify();

// fetch( `https://workshops-server.herokuapp.com/workshops/13` )
//     .then(
//         response => {
//             // if the response data is NOT in JSON fromat the call to response.json() WILL FAIL
//             return response.json(); // calls JSON.parse( requestBody ) internally
//         }
//     )
//     .then(
//         data => console.log( data )
//     );

// fetch( `https://workshops-server.herokuapp.com/sdbejb` ) // try this -> will result in error
fetch( `https://workshops-server.herokuapp.com/` )
    .then(
        response => {
            if( !response.ok ) { // false for 404 / 500 etc. response
                throw new Error( response.statusText );
            }

            // if the response data is NOT in JSON fromat the call to response.json() WILL FAIL
            // return response.text(); // parses the requestBody as text
            return response.json(); // calls JSON.parse( requestBody ) internally
        }
    )
    .then(
        data => console.log( data ) // a JS array / object
    )
    .catch(
        error => console.log( error.message )
    );