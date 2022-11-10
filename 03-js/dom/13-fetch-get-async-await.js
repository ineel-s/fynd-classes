// set up status message
// EXERCISE: Rewrite using CSS classes
const statusMessage = document.getElementById( 'status-message' );
let _page = 1;

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
        const response = await fetch( `https://workshops-server.herokuapp.com/workshops?_page=${_page}` );

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