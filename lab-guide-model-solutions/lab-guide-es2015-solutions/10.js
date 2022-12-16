class Movie {
    constructor( name, yearOfRelease ) {
        this.name = name;
        this.cast = [];
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = 0;
    }

    addToCast( newMember ) {
        this.cast.push( newMember );
        return this.cast.length;
    }

    addToCollection( amount ) {
        this.boxOfficeCollection += amount;
    }
}

class SequelMovie extends Movie {
    constructor( name, yearOfRelease, earlierMovies ) {
        super( name, yearOfRelease );

        this.earlierMovies = earlierMovies;
    }

    getLifetimeEarnings() {
        let total = this.boxOfficeCollection;

        for( let i = 0; i < this.earlierMovies.length; i++ ) {
            total += this.earlierMovies[i].boxOfficeCollection;
        }

        return total;
    }
}

const bahubali1 = new Movie( 'Bahubali', 2015 );
bahubali1.addToCast( 'Prabhas' );
bahubali1.addToCast( 'Tamannah' );
bahubali1.addToCollection( 100 );

const bahubali2 = new SequelMovie( 'Bahubali 2', 2017, [ bahubali1 ] );
bahubali1.addToCast( 'Prabhas' );
bahubali1.addToCast( 'Tamannah' );
bahubali1.addToCollection( 200 );

const bahubali3 = new SequelMovie( 'Bahubali 3', 2022, [ bahubali1, bahubali2 ] );
bahubali1.addToCast( 'Prabhas' );
bahubali1.addToCast( 'Tamannah' );
bahubali1.addToCollection( 300 );

console.log( bahubali3.getLifetimeEarnings() );