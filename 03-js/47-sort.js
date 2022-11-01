const persons = [
    {
        name: 'Bob',
        age: 32
    },
    {
        name: 'Aaron',
        age: 40
    },
    {
        name: 'Charlie',
        age: 35
    },
    {
        name: 'Dave',
        age: 18
    }
];

// sort alphabetically (by name)
persons.sort(
    ( a, b ) => {
        if( a.name < b.name ) {
            return -1; // the first argument (a) should come before the second (b)
        }

        if( b.name < a.name ) {
            return 1; // the second argument (b) should come before the first (a)
        }

        if( a.name === b.name ) {
            return 0;
        }
    }
)

console.log( persons );