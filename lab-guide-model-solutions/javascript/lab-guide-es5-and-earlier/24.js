var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

days.forEach(function( day ) {
    console.log( day );
});

let dayLengths = days.map(function( day ) {
    return day.length;
});

let daysBetweenSAndY = days.filter(function( day ) {
    return ( day >= "S" && day < "Y" );
});

let sixLetterdays = days.filter(function( day ) {
    return day.length === 6;
});