// a) Comparison (i.e. relational) operators (including equality, i.e. exact match)
// i. Find shows that are less than one hour duration
db.shows.find(
    {
        runtime: 60
    }
);

// 170 shows have 60 minutes runtime
db.shows.find(
    {
        runtime: 60
    }
).count();

// 68 shows have runtime < 60 minutes
db.shows.find(
    {
        runtime: {
            $lt: 60
        }
    }
).count();

// 238 shows have runtime <= 60 minutes
db.shows.find(
    {
        runtime: {
            $lte: 60
        }
    }
).count();

// ii. Find shows with runtime between 30 and 60 minutes
// 4 shows have runtime > 30 && runtime < 60
db.shows.find(
    {
        runtime: {
            $gt: 30,
            $lt: 60
        }
    }
).count();

// iii. Find shows with average rating at least 8 ($gte)
// 112 shows
db.shows.find(
    {
        "rating.average": {
            $gte: 8
        }
    }
).count();

// iv. Find shows with rating between 8 and 9
// 90 shows (> 8 && < 9)
db.shows.find(
    {
        "rating.average": {
            $gt: 8,
            $lt: 9
        }
    }
).count();

// v. Find shows in horror genre
// 23 shows
db.shows.find(
    {
        genres: 'Horror'
    }
).count();

// vi. Find shows which have ONLY horror as their genre
// 0 shows
db.shows.find(
    {
        genres: [
            'Horror'
        ]
    }
).count();

// 8 shows
db.shows.find(
    {
        genres: [
            'Drama'
        ]
    }
).count();

// b) Special comparison operators that match within a list of values - $in, $nin (use these
// operators in your solution)
// i) Find shows that have one of Drama or Horror as genres in them
// 159 shows
db.shows.find(
    {
        genres: {
            $in: [ 'Drama', 'Horror' ]
        }
    }
).count();

// ii) Find shows that are of type Animation or Reality
// 24 shows
db.shows.find(
    {
        type: {
            $in: [ 'Animation', 'Reality' ]
        }
    }
).count();

// iii) Find shows that have neither Drama nor Horror as genres in them
// 81 shows
db.shows.find(
    {
        genres: {
            $nin: [ 'Drama', 'Horror' ]
        }
    }
).count();

// iv) Find shows that are neither of type Animation, nor Reality
// 216 shows
db.shows.find(
    {
        type: {
            $nin: [ 'Animation', 'Reality' ]
        }
    }
).count();

// v) Find shows that are not running on the network HBO, nor FOX
// 202 shows
db.shows.find(
    {
        "network.name": {
            $nin: [ 'HBO', 'FOX' ]
        }
    }
).count();

// c) Logical operators
// i) Find shows that have one of Drama or Horror as genres in them (try this
// without using $in)
// 159 shows
db.shows.find(
    {
        $or: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
).count();

// ii) Find shows that have neither Drama nor Horror as genres in them (try this with
// $not and $in
// 81 shows
db.shows.find(
    {
        $nor: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
).count();

// 81 shows
db.shows.find(
    {
        genres: {
            $not: {
                $in: [ 'Drama', 'Horror' ]
            }
        }
    }
).count();

// 81 shows
db.shows.find(
    {
        $and: [
            {
                genres: {
                    $ne: 'Drama'
                }
            },
            {
                genres: {
                    $ne: 'Horror'
                }
            }
        ]
    }
).count()

// iii) Find shows that have BOTH Drama and Horror as their genre
// 17 shows
db.shows.find(
    {
        $and: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
).count();


// iv) Find shows that have genre Drama but not Horror. Again, find shows that have
// genre Horror but not Drama.
// EXERCISE

// v) Find shows that do not have at least one of Drama or Horror as their genre
// (i.e. show could have Drama but not Horror, Horror but not Drama, or neither
// Drama not Horror)
// EXERCISE

// d) Element operators - $exists and $type
// i) Find shows that have a webChannel property
// 240 shows
db.shows.find(
    {
        webChannel: {
            $exists: true
        }
    }
).count();

// 233 shows
db.shows.find(
    {
        "network.country.name": {
            $exists: true
        }
    }
).count();

// ii) Find shows that have a webChannel with a country field within
// 10 shows
db.shows.find(
    {
        "webChannel.country": {
            $exists: true
        }
    }
).count();

// iii) Find shows which do not have a web channel (null)
// Skipped

// iv) Find shows which have a web channel (not null, but an object)
db.shows.find(
    {
        webChannel: {
            $type: "object"
        }
    }
).count();

// v) Find shows which have a web channel (not null, but an object), but country for
// webChannel is null
// EXERCISE

// e) Evaluation operators - $regex, $each
// i) Find all shows whose name contains the word “Last”
// 3 shows
db.shows.find(
    {
        name: /Last/i
    }
).count();

// ii) Repeat the above but with a “last” (all lowercase)
// EXERCISE

// iii) Repeat again with a case-sensitive match
// EXERCISE

// iv) Find all shows whose weight is more than 10 times their average rating
// ( weight ) > ( 10 * rating.average )
// 168 shows
db.shows.find({
    $expr: {
        $gt: [
            "$weight",
            {
                $multiply: [ 10, "$rating.average" ]
            }
        ]
    }
}).count();

// v) Find all shows whose weight is less than or equal to 10 times their average rating
// value. Use $not rather than $lte.
// EXERCISE

// vi) Find all shows where 8% of the weight (0.08 * weight) is less than the average
// rating value. Make sure the average rating is not null.
// EXERCISE

// f) Array query operators - Applicable ONLY for array fields
// i) Find shows that have BOTH Drama and Horror as their genre. Use $all.
// 17 shows
db.shows.find(
    {
        genres: {
            $all: [ 'Drama', 'Horror' ]
        }
    }
).count();

// ii) Find shows that are scheduled on both "Monday" and "Tuesday"
// __ shows
db.shows.find(
    {
        "schedule.days": {
            $all: [ 'Monday', 'Tuesday' ]
        }
    }
).count();

// Create a collection to store scores of students in various subjects. Include name of
// students in one field, and scores in another (between 0 – 100). Scores is an array of
// documents, each with the subject name and score. Insert some documents so that some
// subjects are shared among students and some subjects are specific to a student (elective
// subjects). Now do the following.
db.exams.insertMany(
    [
        {
            name: 'John Doe',
            scores: [
                { name: 'Maths', score: 85 },
                { name: 'Science', score: 95 },
                { name: 'English', score: 65 },
                { name: 'Hindi', score: 88 },
                { name: 'History', score: 80 }
            ]
        },
        {
            name: 'Jane Doe',
            scores: [
                { name: 'Maths', score: 95 },
                { name: 'Science', score: 85 },
                { name: 'English', score: 75 },
                { name: 'Hindi', score: 90 },
                { name: 'History', score: 95 }
            ]
        },
        {
            name: 'Mark Smith',
            scores: [
                { name: 'Maths', score: 65 },
                { name: 'Science', score: 75 },
                { name: 'English', score: 95 },
                { name: 'Hindi', score: 98 },
                { name: 'History', score: 85 }
            ]
        },
        {
            name: 'Mary Smith',
            scores: [
                { name: 'Maths', score: 75 },
                { name: 'Science', score: 85 },
                { name: 'English', score: 100 },
            ]
        },
        {
            name: 'David Smith',
            scores: [
                { name: 'Maths', score: 85 },
                { name: 'Science', score: 75 },
                { name: 'English', score: 89 }
            ]
        }
    ]
)

// i) Find all students who have a score of more 90% in some subject and have taken
// up history
db.exams.find(
    {
        "scores.name": "History",
        "scores.score": {
            $gte: 90
        }
    }
);

// ii) Find all students who have a score of more than 90% in history
db.exams.find(
    {
        scores: {
            $elemMatch: {
                name: 'History',
                score: {
                    $gte: 90
                }
            }
        }
    }
);

// iii) Find all students who have taken up exactly 3 subjects
db.exams.find(
    {
        scores: {
            $size: 3
        }
    }
);

// projection helps avoid transferring unnecessary data
db.exams.find(
    { // filter clause (WHERE <condition>)
        scores: {
            $size: 3
        }
    },
    { // projection clause (SELECT a, b, c, )
        _id: false, // id is selected by default
        name: true
    }
);

// g) Projection operator - $, $slice
// NOTE: This operator is used on the projection object (second argument) and not the
// filter object (first argument) – it transforms arrays values that are projected.
// i) Find all students who have taken up history and project the matching subject
// details (i..e history)
db.exams.find(
    {
        "scores.name": "History"
    },
    {
        "scores.$": true
    }
);

// ii) Find all students who have taken up history and project the first 2 subjects they
// have in the document.
db.exams.find(
    {
        "scores.name": "History"
    },
    {
        scores: {
            $slice: 2
        }
    }
);

// last 2 subjects
db.exams.find(
    {
        "scores.name": "History"
    },
    {
        scores: {
            $slice: -2
        }
    }
);

// skip 1 element, return 3 elements
db.exams.find(
    {
        "scores.name": "History"
    },
    {
        scores: {
            $slice: [ 1, 3 ]
        }
    }
);