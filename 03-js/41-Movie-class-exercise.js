class Movie {
    constructor(name, cast, yearOfRelease, boxOfficeCollection) {
        this.name = name;
        this.boxOfficeCollection = boxOfficeCollection;
        this.yearOfRelease = yearOfRelease;
        this.cast = cast;
    }


    addToCast(value) {
        this.cast.push(value);
    }

    addToCollection( amt ) {
        this.boxOfficeCollection.amt += amt;
    }
}

const kantara = new Movie( 'Kantara', [ 'Rishabh', 'Sapthami' ], 2022, { amt: 100, units: 'Rs. (crores)' } );
kantara.addToCast( 'Achyuth' );
kantara.addToCollection( 25 );

console.log( kantara );