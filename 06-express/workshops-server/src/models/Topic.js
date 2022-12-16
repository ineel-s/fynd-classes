const mongoose = require( 'mongoose' );

const topicSchema = new mongoose.Schema({
    workshop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop', // the name the related Model is registered with
        required: true
    },
    name: {
        type: String,
        required: true
    },
    durationInHours: {
        type: Number,
        min: 0
    }
});

mongoose.model( 'Topic', topicSchema );

// suppose these are topics for workshop with id 123
// [
//     {
//         _id: 1,
//         workshop: 123,
//         ...
//     },
//     {
//         _id: 2,
//         workshop: 123,
//         ...
//     },
//     {
//         _id: 3,
//         workshop: 123,
//         ...
//     }
// ]