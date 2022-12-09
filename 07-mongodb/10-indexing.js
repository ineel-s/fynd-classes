// Find all shows with weight = 90. Use explain() to find
// a. execution plan
// b. rejected plans (if any)
// c. execution time
// d. number of documents examined
// e. number of keys examined
// f. number of results as a percentage of documents examined

db.shows.explain( "executionStats" ).find( { name: 'Game of Thrones' } )

// every collection has index(es)
// viewing existing indexes
db.shows.getIndexes();

db.shows.explain( "executionStats" ).find( { _id: ObjectId( "639091a522a4b1e3adf55496" ) })

// id field and NOT _id
db.shows.createIndex( { id: 1 }, { unique: true } );

// index based on name field
db.shows.createIndex( { name: 1 }, { name: 'nameIdx' } );

// now this query is executed using name index
db.shows.explain( "executionStats" ).find( { name: 'Game of Thrones' } )