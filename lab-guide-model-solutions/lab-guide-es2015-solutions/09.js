class Movie {
    constructor( name, yearOfRelease ) {
        this.name = name;
        this.cast = [];
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = 0;
    }

    addToCast( newMember ) {
        this.cast.push( newMember );
        return this.cast.length; // NOTE: this is not a requirement in the question
    }

    addToCollection( amount ) {
        this.boxOfficeCollection += amount;
    }
}

const sholay = new Movie( 'Sholay', 1975 );

sholay.addToCast( 'Amitabh' );
sholay.addToCast( 'Dharmendra' );
const totalCastMembers = sholay.addToCast( 'Hema' );

sholay.addToCollection( 100 );
sholay.addToCollection( 25 );

console.log( sholay );
console.log( 'Total cast members in movie is now ' + totalCastMembers );

const bahubali = new Movie( 'Bahubali', 2016 );
bahubali.addToCast( 'Prabhas' );

console.log( bahubali );