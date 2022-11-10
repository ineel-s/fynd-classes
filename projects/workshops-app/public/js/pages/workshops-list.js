import {
    fetchWorkshops
} from '../services/workshops.js';

// state of the page
let workshops = [];
let _page = 1;

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
    const workshopsList = document.querySelector( '.workshops-list' );

    let str = '';

    workshops.forEach(
        ( { imageUrl, name } ) => {
            str += `
                <li class="workshops-list-item">
                    <a href="/workshop-details.html">
                        <img src="${imageUrl}" alt="${name}" />
                        <h2 class="workshops-list-item-title">${name}</h2>
                    </a>
                </li>
            `;
        }
    );

    workshopsList.innerHTML = str;
};

const fetchAndShowWorkshops = async () => {
    setMessage( 'Loading workshops...Please wait...', 'lightblue' );

    try {
        workshops = await fetchWorkshops( _page );
        hideMessage();
        showWorkshops( workshops );
    } catch( error ) {
        setMessage( error.message, 'lightpink' );
    }
};

document.getElementById( 'previous-page' ).addEventListener( 'click', function() {
    if( _page === 1 ) {
        return;
    }

    _page--;
    fetchAndShowWorkshops();
});

document.getElementById( 'next-page' ).addEventListener( 'click', function() {
    if( workshops.length === 0 ) {
        return;
    }

    _page++;
    fetchAndShowWorkshops();
});

// 'DOMContentLoaded' event fires on document object AFTER ALL DOM nodes have been created
// fired even before load event
document.addEventListener( 'DOMContentLoaded', function() {
    // on page load, we need to fetch and show
    fetchAndShowWorkshops();
});