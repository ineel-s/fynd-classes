// Write a for loop that calculates sum of items in an array of numbers. Example: For array [ 1, 2, 3, 4 ] it calculates the sum as 10

var numbers = [ 1, 2, 3, 4 ];

var result = 0;

for( var i = 0; i < numbers.length; i++ ) {
    result = result + numbers[i];    
}

console.log( result );