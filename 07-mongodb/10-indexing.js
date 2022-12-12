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

// compound indexes - created on 2 or more fields
db.shows.createIndex( { name: 1, type: 1 }, { unique: true } );

// this query uses the above index
db.shows.explain().find({
    type: 'Scripted',
    name: 'Grimm'
});

// this query uses the above index (name is the first field in the compound index)
db.shows.explain().find({
    name: 'Grimm'
});

// this query DOES NOT use the above index (type is NOT the first field in the compound index)
db.shows.explain().find({
    type: 'Scripted'
});

// text index - only 1 text index per collection
db.shows.createIndex( { name: "text", summary: "text" }, { language_override: "en" } );

// The text index is used in a "text-based query"
db.shows.find(
    {
        $text: {
            $search: 'last'
        }
    }
);

// "last" should be present, "man" should be absent
// reference: https://stackoverflow.com/questions/48975707/mongoerror-must-have-meta-projection-for-all-meta-sort-keys-using-mongo-db-na
db.shows
    .find(
        {
            $text: {
                $search: 'last -man',
                $caseSensitive: false,
                $diacriticSensitive: true
            }
        },
        { score: { $meta: "textScore" } }
    )
    .sort(
        {
            score: {
                $meta: "textScore"
            }
        }
    );