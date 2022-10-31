// "functions are first-class citizens"
// "Higher-order function"
function print( person, fetchTitle ) {
    const title = fetchTitle( person );
    console.log( `${title} ${person.name} is ${person.age} years old` );
}

const john = {
    name: 'John',
    age: 32,
    gender: 'male'
};

// helper function for print function
function getTitle( person ) {
    return person.gender === 'female' ? 'Ms.' : 'Mr.';
}

// The name of the function is a reference to the function
print( john, getTitle ); // person = john; fetchTitle = getTitle

print(
    {
        name: 'Jane',
        age: 28,
        gender: 'female'
    },
    // helper function for print function
    function( person ) {
        return person.gender === 'female' ? 'Madame' : 'Monseiur';
    }
);