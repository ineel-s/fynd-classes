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
    imageUrl: String
});

// The name of the collection is the plural form of the name of the Model
mongoose.model( 'Workshop', workshopsSchema );