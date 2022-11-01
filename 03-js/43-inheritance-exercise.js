// Create a SequelMovie class that inherits from Movie class. SequelMovie has an additional 
// property called earlierMovies - an array of Movie objects. It has an additional method called 
// getLifetimeEarnings() that returns the sum of boxOfficeCollection of all earlier movies along 
// with the SequelMovie object's boxOfficeCollection.

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

class SequelMovie extends Movie {
    constructor( name, cast, yearOfRelease, boxOfficeCollection, earlierMovies ) {
        super( name, cast, yearOfRelease, boxOfficeCollection );

        this.earlierMovies = earlierMovies; // array of earlier movie
    }

    getLifetimeEarnings() {
        let lifetimeEarnings = this.boxOfficeCollection.amt;

        for( let i = 0; i < this.earlierMovies.length; i++ ) {
            lifetimeEarnings += this.earlierMovies[i].boxOfficeCollection.amt;
        }

        return lifetimeEarnings;
    }
}

const americanPie1 = new Movie( 'American Pie', [ 'Actor 1', 'Actor 2' ], 2010, { amt: 100, currency: '$' } );
const americanPie2 = new SequelMovie( 'American Pie 2', [ 'Actor 1', 'Actor 2' ], 2011, { amt: 120, currency: '$' }, [ americanPie1 ] );
console.log( americanPie2.getLifetimeEarnings() );