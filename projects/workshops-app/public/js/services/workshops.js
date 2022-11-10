// We shall place all "workshops" resource related API calls here
const fetchWorkshops = async ( _page ) => {
    const searchParams = new URLSearchParams( `_page=${_page}` ); // does URL encoding

    let url = `https://workshops-server.herokuapp.com/workshops?${searchParams}`;

    const response = await fetch( url );

    if( !response.ok ) {
        throw new Error( response.statusText );
    }

    const data = await response.json();
    return data;
};

const addWorkshop = () => {

};

export {
    fetchWorkshops,
    addWorkshop
};