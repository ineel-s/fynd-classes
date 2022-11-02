// we can destructure when a function receives an object / array, or a function returns an object / array
function print( { name, age } ) {
    // const { name, age } = person;
    console.log( `${name} is ${age} years old` );

    return {
        x: 100,
        y: 200
    };
}

const { x, y } = print(
    {
        name: 'Jane',
        age: 28
    }
);

console.log( x, y );