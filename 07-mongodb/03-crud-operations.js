// Creating (Inserting) a document (insertOne()/insertMany())
db.workshops.insertOne(
    {
        name: 'MongoDB',
        startDate: Date('2022-12-06'),
        endDate: Date('2022-12-09'),
        attendees: [
            'john@fynd.com',
            'jane@fynd.com'
        ],
        location: {
            city: 'Mumbai',
            pinCode: 400100
        }
    }
);

db.workshops.insertMany(
    [
        {
            name: 'Node',
            startDate: '2022-11-28',
            endDate: '2022-11-30',
            attendees: [
                'john@fynd.com',
                'jane@fynd.com',
                'mark@fynd.com',
                'mary@fynd.com'
            ],
            location: {
                city: 'Mumbai',
                pinCode: 400100
            }
        },
        {
            name: 'Express',
            startDate: '2022-12-01',
            endDate: '2022-12-12',
            attendees: [
                'john@fynd.com',
                'jane@fynd.com',
                'mark@fynd.com',
                'mary@fynd.com'
            ],
            location: {
                city: 'Pune',
                pinCode: 410100
            }
        }
    ]
);

// using Date as data type for fields
db.workshops.insertOne(
    {
        name: 'JavaScript',
        startDate: new Date('2022-10-27'),
        endDate: new Date('2022-11-09'),
        attendees: [
            'john@fynd.com',
            'jane@fynd.com'
        ],
        location: {
            city: 'Mumbai',
            pinCode: 400100
        }
    }
);

// Retrieve data (findOne()/find())
// findOne() - find the first matching document
db.workshops.findOne(
    { // filter clause
        name: 'Node'
    }
);

// if you want to find the documents with a speified value within an array field (eg. within attendees), just treat it like a normal field
// find() - find ALL matching documents
db.workshops.find(
    { // filter clause
        attendees: 'mark@fynd.com'
    }
);

db.workshops.find(
    { // filter clause
        attendees: 'david@fynd.com'
    }
);

db.workshops.find(
    {
        "location.city": 'Pune'
    }
);

// You can specify multiple fields (all the fields should match)
db.workshops.find(
    {
        "location.city": 'Mumbai',
        attendees: "mark@fynd.com"
    }
)