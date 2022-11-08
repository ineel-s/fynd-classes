(async () => {
    // usually this data will be constructed when a form is submitted
    const workshop = {
        name: 'jQuery',
        "description": "jQuery is a JavaScript library",
        "startDate": "2020-03-01T04:00:00.000Z",
        "endDate": "2020-03-03T08:00:00.000Z",
        "time": "9:30 am - 1:30 pm",
        "location": {
            "address": "Tata Elxsi, Prestige Shantiniketan",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        "modes": {
            "inPerson": true,
            "online": false
        },
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/524px-JQuery_logo.svg.png"
    };

    // code to show the loading message...

    try {
        // we are adding a workshop to the "list of workshops"
        const response = await fetch( 
            `https://workshops-server.herokuapp.com/workshops`,
            {
                method: 'post', // always use uppercase for safety
                body: JSON.stringify( workshop ), // converts a JS object / array into JSON-formatted text
                headers: {
                    'Content-Type': 'application/json' // MIME type
                }
            }
        );

        if( !response.ok ) {
            throw new Error( response.statusText );
        }

        // code to hide the loading message...

        const data = await response.json();
        console.log( data );
    } catch( error ) {
        // code to show the error message...
        console.log( error.message )
    }
})();