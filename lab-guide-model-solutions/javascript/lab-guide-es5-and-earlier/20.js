var war = {
    name: 'War',
    cast: [
        'Hrithik',
        'Tiger'
    ],
    yearOfRelease: 2019,
    boxOfficeCollection: 250,
    addToCast: function( newMember ) {
        // this.cast[this.cast.length] = newMember;
        this.cast.push( newMember );
    },
    addToCollection: function( amount ) {
        this.boxOfficeCollection += amount;
    }
};

war.addToCast( 'Vaani' );
war.addToCollection( 75 );
console.log( war );