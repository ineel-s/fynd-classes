// Write a for loop that calculates sum of squares of items in an array of numbers. Example: For array [ 1, 2, 3, 4 ] it calculates the sum of squares as 30 (i.e. 1 + 4 + 9 + 16)
var numbers = [ 1, 2, 3, 4 ];

var result = [];

for( var i = 0; i < numbers.length; i++ ) {
    result.push( numbers[i] * numbers[i] );
}

console.log( result );