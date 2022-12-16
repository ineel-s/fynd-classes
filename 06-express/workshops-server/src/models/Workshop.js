const mongoose = require( 'mongoose' );

const workshopsSchema = new mongoose.Schema({
    // name: String,
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        enum: [
            "frontend",
            "backend",
            "database",
            "devops",
            "language",
            "mobile"
        ]
    },
    id: Number,
    description: {
        type: String,
        required: true,
        maxLength: 1024
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    time: String,
    location: {
        address: String,
        city: String,
        state: String
    },
    modes: {
        inPerson: Boolean,
        online: Boolean
    },
    imageUrl: String,
    // it is ok to store topics along with workshops
    // it is not ok to store students along with classrooms
    // topics: [
    //     {
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         durationInHours: {
    //             type: Number,
    //             min: 0
    //         }
    //     }
    // ]
    // topics: {
    //     type: [ mongoose.Schema.Types.ObjectId ]
    // }
});

// inverse relationship is set up (Workshop -> Topic)
workshopsSchema.virtual( 'topics', {
    ref: 'Topic',
    localField: '_id',
    foreignField: 'workshop' // the field in the other collection (Topic) that references a document in this collection (Workshop)
});

// The name of the collection is the plural form of the name of the Model
mongoose.model( 'Workshop', workshopsSchema );

// when we Workshop.findById( 123 );
// {
//     _id: 123,
//     topics: [ 1, 2, 3 ],
//     name: 'MongoDB workshop
// }