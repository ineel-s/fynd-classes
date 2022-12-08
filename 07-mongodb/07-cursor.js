// SORT, SKIP & LIMIT (methods on cursor)
// sort(), skip() and limit() are called on cursors and also return cursors. The shell iterates
// through the cursor that is finally returned from the chain of calls to these methods – The
// order of the calls hence DOES NOT affect the results.

use showsDB;
const cursor = db.shows.find()
cursor.hasNext()
// true
cursor.next()
// fetches and logs the first document

// loops through all documents and print them
// NOTE: each time we call next(), the pointer advances
while( cursor.hasNext() ) { print( cursor.next() ); }


// i) Retrieve all shows and sort by rating – first ascending and then descending
db.shows
    .find(
        {}, // no filtering
        { // projection
            name: true,
            "rating.average": true
        }
    )
    .sort(
        {
            "rating.average": 1
        }
    )

// ii) Retrieve all shows and sort by rating first, and runtime when ratings are the same
db.shows
    .find(
        {}, // no filtering
        { // projection
            name: true,
            "rating.average": true,
            runtime: true
        }
    )
    .sort(
        {
            "rating.average": -1, // first sort by rating
            runtime: 1 // if rating matches then sort in ascending order of runtime
        }
    )

// iii) Retrieve all shows and sort by rating first, and runtime when ratings are the same.
// This time skip 20 documents and retrieve only 10 documents.
db.shows
    .find(
        {}, // no filtering
        { // projection
            name: true,
            "rating.average": true,
            runtime: true
        }
    )
    .sort(
        {
            "rating.average": -1, // first sort by rating
            runtime: 1 // if rating matches then sort in ascending order of runtime
        }
    )
    .skip( 20 )
    .limit( 10 );
