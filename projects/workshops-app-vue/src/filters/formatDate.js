/**
 * 1st argument -> the thing that you want to format
 * 2nd, 3rd, ... -> any extra inputs from the place in the template where you apply the filter
 */
const formatDate = ( isoDateString, format = 'standard' ) => {
    const d = new Date( isoDateString );
    
    switch( format ) {
        case 'indian':
            return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        case 'standard':
            return d.toDateString();
        default:
            return isoDateString; // return what we received without any changes
    }
};

export default formatDate;