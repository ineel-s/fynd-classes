// set up status message
// EXERCISE: Rewrite using CSS classes
const statusMessage = document.getElementById( 'status-message' );

statusMessage.style.fontSize = '1.25em';
statusMessage.style.padding = '1em';
statusMessage.style.borderRadius = '5px';

const setMessage = ( message, bgColor ) => {
    statusMessage.textContent = message;
    statusMessage.style.backgroundColor = bgColor;
}

const hideMessage = () => {
    statusMessage.style.display = 'none';
};

const showMessage = () => {
    statusMessage.style.display = 'block';
};

const showWorkshops = workshops => {
    const workshopsList = document.getElementById( 'workshops-list' );
    
    // every time you set innerHTML (some DOM operation), the browser has to repaint the screen. This is time-consuming. So we use a temporary string to make the process efficient

    // inefficient way
    // workshops.forEach(
    //     workshop => {
    //         workshopsList.innerHTML += `
    //             <li>${workshop.name}</li>
    //         `;
    //     }
    // );

    let str = '';

    workshops.forEach(
        workshop => {
            str += `
                <li>${workshop.name}</li>
            `;
        }
    );

    workshopsList.innerHTML = str;
};

(async () => {
    setMessage( 'Loading workshops...Please wait...', 'lightblue' );

    try {
        const response = await fetch( `https://workshops-server.herokuapp.com/workshops` );

        if( !response.ok ) {
            throw new Error( response.statusText );
        }

        hideMessage();

        const workshops = await response.json();
        console.log( workshops );

        showWorkshops( workshops );
    } catch( error ) {
        setMessage( error.message, 'lightpink' );
    }
})();