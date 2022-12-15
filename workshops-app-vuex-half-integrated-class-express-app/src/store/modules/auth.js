import { login } from '@/services/auth';

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_ROLE = 'role';

const auth = {
    state: {
        token: localStorage.getItem( KEY_TOKEN ) || '',
        email: localStorage.getItem( KEY_EMAIL ) || '',
        role: localStorage.getItem( KEY_ROLE ) || ''
    },
    getters: {
        isAuthenticated( state ) {
            return !!state.token;
        },
        isAdmin( state ) {
            return state.role === 'admin';
        }
    },
    mutations: {
        setToken( state, token ) {
            state.token = token;
        },
        setEmail( state, email ) {
            state.email = email;
        },
        setRole( state, role ) {
            state.role = role;
        }
    },
    actions: {
        // credentials = { email: string, password: string }
        // login( context, credentials ) {
        login( { commit }, credentials ) {
            // console.log( context ); // { commit: fn, getters: fn, }

            return login( credentials )
                        .then( data => {
                            const { token, email, role } = data.data;
        
                            localStorage.setItem( KEY_TOKEN, token );
                            localStorage.setItem( KEY_EMAIL, email );
                            localStorage.setItem( KEY_ROLE, role );
        
                            commit( 'setToken', token );
                            commit( 'setEmail', email );
                            commit( 'setRole', role );
        
                            return email;
                        });
        },
        logout( { commit } ) {
            localStorage.removeItem( KEY_TOKEN );
            localStorage.removeItem( KEY_EMAIL );
            localStorage.removeItem( KEY_ROLE );
        
            commit( 'setToken', '' );
            commit( 'setEmail', '' );
            commit( 'setRole', '' );

            return Promise.resolve();
        }
    }
};

export default auth;