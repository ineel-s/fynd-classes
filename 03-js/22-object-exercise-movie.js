const kantara = {
    name: 'Kantara',
    cast: [
        'Rishabh Shetty',
        'Sapthami Gowda'
    ],
    boxOfficeCollection: {
        amount: 100,
        units: 'cr'
    },
    yearOfRelease: 2022,
    addToCast( member ) {
        this.cast.push( member )
    }
};

kantara.addToCollection = function( amount ) {
    this.boxOfficeCollection.amount += amount;
};

kantara.addToCast( 'Someone' );
kantara.addToCollection( 25 );

console.log( kantara );