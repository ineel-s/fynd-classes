// Given the following snippet of code, solve the questions that follow.
var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];

// Sort the numbers in the array in increasing order and print the array
numbers.sort(function( x, y ) {
    return x - y;
});

// Sort the array in decreasing order and print the array
numbers.sort(function( x, y ) {
    return y - x;
});

// Add the number 37 to the end of the array using push()
numbers.push( 37 );

// Remove the last 2 numbers in the array
numbers.pop();
numbers.pop();

// Remove the numbers at indices 3, 4 (i.e. the 4th and 5th numbers) and insert the strings 'Seven' and 'Eleven' in their place.
numbers.splice( 3, 2, 'Seven', 'Eleven' );

// Use indexOf() to check if 23 belongs to the array or not. Also, check if 41 belongs to the array or not.
console.log( numbers.indexOf( 23 ) );
console.log( numbers.indexOf( 41 ) );