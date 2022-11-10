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

const fetchAndShowWorkshops = async () => {
    setMessage( 'Loading workshops...Please wait...', 'lightblue' );

    try {
        const searchParams = new URLSearchParams( `_page=${_page}` ); // does URL encoding
        let url = `https://workshops-server.herokuapp.com/workshops?${searchParams}`;

        const response = await fetch( url );

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
};

// on page load, we need to fetch and show
fetchAndShowWorkshops();

document.getElementById( 'next-page' ).addEventListener( 'click', function() {
    _page++;
    fetchAndShowWorkshops();
});