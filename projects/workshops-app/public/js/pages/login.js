import { login } from '../services/auth.js';

const loginForm = document.getElementById( 'login-form' );
const emailEl = document.getElementById( 'email' );
const passwordEl = document.getElementById( 'password' );

const bindListeners = () => {
    loginForm.addEventListener( 'submit', async function( event ) {
        event.preventDefault(); // we shall do Ajax submission

        // @todo Validate the form, and display errors if any and stop execution

        const credentials = {
            email: emailEl.value.trim(),
            password: passwordEl.value.trim()
        };

        // ...if all good...
        /*const loginData = */await login( credentials );
        window.location.href = '/'; // redirect to home page
    });
};

document.addEventListener( 'DOMContentLoaded', function() {
    // on page load, we need to fetch and show
    bindListeners();
});