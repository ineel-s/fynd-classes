// a) Field update operators - $inc, $min, $max, $mul, $rename, $set, $unset

// i. Find all shows that are in "English" and have network -> country code as "US", and set
// the language as "English (US)" instead. Also add a new field "locale" and set it to "en-US"
db.shows.updateMany(
    {
        language: 'English',
        "network.country.code": "US"
    },
    {
        $set: {
            language: 'English (US)', // exisitng field
            locale: 'en-US' // new field
        }
    }
);

// ii. Find the first show that has a weight of less than 40 and rating more than 7 and
// increase weight by 10. Also set a new field “criticsChoice” to true.
// weight = weight + 10
db.shows.findOne(
    {
        weight: {
            $lt: 40,
        },
        "rating.average": {
            $gt: 7
        }
    }
);

db.shows.updateOne(
    {
        weight: {
            $lt: 40,
        },
        "rating.average": {
            $gt: 7
        }
    },
    {
        $inc: {
            weight: 10
        }
    }
)

// iii. Find the first show that has a weight of more than 80 and rating less than 6 and
// decrease weight by 10. Also set a new field “criticsChoice” to false.
db.shows.updateOne(
    {
        weight: {
            $gt: 80,
        },
        "rating.average": {
            $lt: 6
        }
    },
    {
        $inc: {
            weight: -10
        },
        $set: {
            criticsChoice: false
        }
    }
)

// iv. Find all shows that have a weight of less than 50 and rating more 7 and increase
// weight to maximum( 50, current value ).
db.shows.findOne(
    {
        weight: {
            $lt: 50
        },
        "rating.average": {
            $gt: 7
        }
    }
)

db.shows.updateMany(
    {
        weight: {
            $lt: 50
        },
        "rating.average": {
            $gt: 7
        }
    },
    {
        $max: {
            weight: 50
        }
    }
);

// v. Find all shows that have a weight of less than 60 and rating more 8 and multiply the
// weight by 1.333333
db.shows.findOne(
    {
        weight: {
            $lt: 60
        },
        "rating.average": {
            $gt: 8
        }
    }
);

db.shows.updateMany(
    {
        weight: {
            $lt: 60
        },
        "rating.average": {
            $gt: 8
        }
    },
    {
        $mul: {
            weight: 1.333333
        }   
    }
);

// vi. Rename criticsChoice field as cc in all documents
db.shows.findOne(
    {
        criticsChoice: false
    }
);

db.shows.updateMany(
    {
        criticsChoice: {
            $exists: true
        }
    }, // all documents (no filtering)
    {
        $rename: {
            criticsChoice: 'cc'
        }
    }
);


// vii. Remove field cc (criticsChoice) from all documents
// EXERCISE: $unset

// viii. Try finding a document with a show name that does not exist (also use language :
// “English” while finding). Set the rating and genres for it. Use the upsert option and
// check that the upserted documented has fields that are part of the filter clause, as
// well as the update clause.

// NOTE: there is no match
db.shows.find(
    {
        name: 'House of the Dragons',
        language: 'English'
    }
);

db.shows.updateOne(
    {
        name: 'House of the Dragons',
        language: 'English'
    },
    {
        $set: {
            "rating.average": 8.5,
            genres: [
                "Drama"
            ]
        }
    },
    { // options for the update query
        upsert: true
    }
);


// b) Array update operators - $, $push, $each, $sort, $slice, $pull, $pop, $addToSet

// i) Update all shows that have a scheduled screening on “Monday”, and replace the
// item “Monday” with “monday” (lowercase). Hint: Use $ operator.
db.shows.updateMany(
    {
        "schedule.days": "Monday"
    },
    {
        $set: {
            "schedule.days.$": "monday"
        }
    }
);

// ii) Update all shows with genre “Horror” by adding another genre “Supernatural”
db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $push: {
            genres: 'Supernatural'
        }
    }
)

// iii) Update all shows with genre “Horror” by adding 2 other genres “Supernatural” and
// “Spook” (you will need to use $each). Also explore how $sort and $slice can be used
// in this case.
db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $push: {
            genres: {
                $each: [ 'Supernatural', 'Spook' ]
            }
        }
    }
)

// iv) Remove the genre Supernatural from the first matching document
db.shows.updateOne(
    {
        genres: 'Supernatural'
    },
    {
        $pull: {
            genres: 'Supernatural'
        }
    }
);

// v) Remove the last genre from every document
db.shows.updateMany(
    {},
    {
        $pop: {
            genres: 1
        }
    }
);

// vi) Add genre Supernatural to all documents of genre Horror. However the
// Supernatural genre should not be added if it already exists as a genre in the
// document.
db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $addToSet: {
            genres: 'Supernatural'
        }
    }
)