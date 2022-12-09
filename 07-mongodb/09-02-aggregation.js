// THE AGGREGATION FRAMEWORK
// We shall understand the aggregate() method, aggregation stage operators, and other
// aggregation operators here.
// References:
// Aggregation pipelines stages:
// https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
// Aggregation pipelines operators:
// https://docs.mongodb.com/manual/reference/operator/aggregation/

// For this exercise too we will use the shows collection.

// a) Using $match to get a collection with a filtered set of documents
// i) Find all shows that have Drama as a genre
// 153 shows
db.shows.aggregate(
    [
        {
            $match: { // this operator is used to do filtering (similar to find())
                genres: 'Drama'
            }
        }
    ]
).toArray().length;

// ii) Find all shows on HBO
// 15 shows
db.shows.aggregate(
    [
        {
            $match: {
                "network.name": "HBO"
            }
        }
    ]
).toArray().length;


// b) Using $group to group documents by field values and produce a new collection
// representing groups
// i) Group shows by the name of network they are running on, and also find the number
// of shows in each network
// using $sum: 1
db.shows.aggregate(
    [
        {
            $group: { // the output document looks like this object
                _id: "$network.name",
                numShows: {
                    $sum: 1 // accumulate 1 for every item in the group
                }
            }
        }
    ]
)

// using $count: {}
// this works ONLY on newer versions of MongoDB
db.shows.aggregate(
    [
        {
            $group: { // the output document looks like this object
                _id: "$network.name",
                numShows: {
                    $count: {}
                }
            }
        }
    ]
)

// output
[
    { _id: 'Sundance TV', numShows: 2 },
    { _id: 'Disney XD' },
    { _id: 'Comedy Central' },
    ...
]


// ii) Group shows by name of network and country they are running in, and also find the
// number of shows, and average runtime of shows in each group (network+country
// combination)
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    name: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                }
            }
        }
    ]
)

// iii) Repeat the above query but create a new field called “stats” in the output
// documents. The “stats” field should have number of shows, and average runtime of
// shows for the group.
// Skipped (incorrect question apparently)

// iv) Just like we can transform document to form new fields with subdocuments while
// projecting, we can also create a new array. Using the $push operator in $group stage,
// we can create a new array with one item per document in the group! This is a special
// feature of MongoDB with no equivalent in SQL (you can calculate only aggregate
// values like sum, average etc. there). Repeat the above exercise, and create an
// additional field “names” that is an array of names of all shows in the group.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    name: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                showNames: { // array field with the names of the shows in this group
                    $push: "$name"
                }
            }
        }
    ]
)

// v) Select all shows that are in English (“language” value), and then group them by their
// type. The output should have the names of the group in the type field, along with
// the number of shows in each group.
db.shows.aggregate(
    [
        { // STAGE 1: Filtering
            $match: {
                language: "English (US)"
            }
        },
        { // STAGE 2: Grouping, and forming aggregates
            $group: {
                _id: {
                    type: "$type"
                },
                numShows: {
                    $sum: 1
                }
            }
        }
    ]
)


// c) Using $match to filter grouped documents
// SQL has a WHERE clause to filter records before grouping, and a HAVING clause
// after grouping (which filters the grouped records based on some aggregate value
// usually). In MongoDB, $match fulfils both these requirements.
// i) Repeat the exercise grouping shows by network name and country. The final results
// should show only the grouped documents of networks that have at least 5 shows.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    name: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                showNames: { // array field with the names of the shows in this group
                    $push: "$name"
                }
            }
        },
        { // HAVING clause of SQL
            $match: {
                numShows: {
                    $gte: 5
                }
            }
        }
    ]
)

// ii) Repeat the same but show only groups with average runtime at less than 50.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    name: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                showNames: { // array field with the names of the shows in this group
                    $push: "$name"
                }
            }
        },
        { // HAVING clause of SQL
            $match: {
                averageRuntime: {
                    $lt: 50
                }
            }
        }
    ]
)


// d) Using $sort to sort documents

// i) Group shows by name of network and country they are running in, and also find the
// number of shows, and average runtime of shows in each group (network+country
// combination). Now sort them by the number of shows (group with highest number
// of shows appears first). If 2 networks are tied on number of shows, the one with the
// lower average runtime appears first.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    name: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                showNames: { // array field with the names of the shows in this group
                    $push: "$name"
                }
            }
        },
        {
            $sort: {
                numShows: -1,
                averageRuntime: 1
            }
        }
    ]
)

// ii) Repeat the above exercise, but make sure groups are formed only on shows that are "Running"
db.shows.aggregate(
    [
        {
            $match: {
                status: 'Running'
            }
        },
        {
            $group: {
                _id: {
                    name: "$network.name",
                    country: "$network.country.code"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                showNames: { // array field with the names of the shows in this group
                    $push: "$name"
                }
            }
        },
        {
            $sort: {
                numShows: -1,
                averageRuntime: 1
            }
        }
    ]
)

// e) Using $project to create a new collection with only selected fields.
// NOTE: Some useful operators would be $concat, $toDate, $year, $convert
// i) Find the name, network name, schedule and runtime of all shows
db.shows.aggregate(
    [
        {
            $project: {
                showName: "$name",
                networkName: "$network.name",
                schedule: "$schedule",
                runtime: "$runtime"
            }
        }
    ]
);

db.shows.aggregate(
    [
        {
            $project: {
                showName: "$name",
                networkName: {
                    $concat: [ "$network.name", " (", "$network.country.code" , ")" ]
                },
                schedule: "$schedule",
                runtime: "$runtime",
                premiered: { // typecast from string to proper date object
                    $convert: {
                        to: "date",
                        input: "$premiered"
                    }
                }
            }
        },
        {
            $project: {
                showName: 1, // same as showName: "$showName"
                networkName: 1,
                schedule: 1,
                runtime: 1,
                premieredYear: {
                    $year: "$premiered"
                }
            }
        }
    ]
);

// ii) Modify the above query so that the network name is reported along with the
// network’s country code like so – “name (code)”, i.e. like “HBO (US)”
// iii) Repeat the above query, but add premiered to the list of fields. However it should be
// converted to a Date object. Use $toDate.
// iv) Repeat the above query using $convert instead of $toDate.
// v) Repeat the above query, but premiered should now be an object with fields year,
// month and date when the show was premiered (use $year, $month, $dayOfMonth –
// you may also use $dateToParts).
// NOTE: You can make use of the fact that there can be multiple stages of the same
// kind, for example you can use 2 project stages in the pipeline.
// vi) Just like we can transform document to form new fields with subdocuments while
// projecting, we can also create a new array. Repeat the above query but set premiered
// as an array with the 3 parts of the date as items within.
// vii) We can use $size to get the size of any array. Use this to find name and number of
// days on which a show is aired for each show.
// viii) We can use $slice to project only a portion of an array. Modify the above query,
// to use $slice to additionally find the first 2 days on which a show is aired.
// NOTE: You may need to add a $match stage to filter out documents that may not
// have the schedule days, or it exists but is not an array
// ix) We can use $filter to choose items of an array based on a condition. Modify the
// above query to include the schedule days in the projected array, only if it airs on a
// weekend. The $in operator is used differently in the pipeline stage (not like
// comparison operator in queries/$match). Check
// https://docs.mongodb.com/manual/reference/operator/aggregation/in/ for how
// to use it
// NOTE: The above query can definitely be simplified using a $match to obtain
// shows that air only on weekends (using $in: [ ‘Sunday’, ‘Saturday’] in $match instead)
// f) Using $unwind creates a set of documents in place of a single document, using the
// different items in an array-valued field of the original document.
// i) Group shows by network name and country and create a new field “genres” that has
// all the genres of all the shows in the group (you will need to $unwind, then $group).
// Try both $push, as well as $addToSet when defining the genres array in $group
// stage.
// www.digdeeper.in © Prashanth Puranik puranik@digdeeper.in
// ii) Sort the above results in descending order of number of genres in a network. This is
// not straight-forward in MongoDB.
// Hint: One way you can do this is to add a $project phase after $group, that adds a
// “numGenres” field, setting it to the length of genres array from $group stage.
// Results can then be sorted based on numGenres.
// g) Using $out creates a new collection
// i) Use $out to create a new collection called “networkGenres” that has all genres of a
// TV network (result of $unwind section exercise i).
// ii) Again use $out to create a new collection called “networkStats” that has some
// statistics of a TV network (result of $group section exercise ii/iii/iv or v).
// h) Use $lookup to join the networkGenres and networkStats tables.
// NOTE: Here each network has only one document in each collection. In general, there
// can be multiple documents from one collection that match another collection