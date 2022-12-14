const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [
            'admin',
            'general'
        ],
        default: 'general'
    }
});

const emailPat = /^[A-Za-z0-9_\.]+@(fynd|example)\.com$/;
const passwordPat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

// we need to do extra configurations on the schema BEFORE we create the model
userSchema.path( 'email' ).validate(function( value ) {
    return emailPat.test( value );
});

userSchema.path( 'password' ).validate(function( value ) {
    return passwordPat.test( value );
});

// 1. Why hash password? it is not possible to look at the hased password and get back the plain text password

// 2. We add a SALT - a ranom string to the password, before we hash. This ensures the hashed passwords are different even if passwords are same.
// john pwd -> 'Password123#^H#&&'
// jane pwd -> 'Password123#DH*I#'

const SALT_FACTOR = 10; // decides the "Strength" of the salt (should not be higher as salting will take long time and occupy CPU time (blocking) - nothing else will execute in the app in that time)

console.log( this ); // global / window

userSchema.pre( 'save', function( done ) { // DO NOT use arrow function here
    const user = this; // const user -> new User()

    if( !user.isModified( 'password' ) ) {
        done();
        return;
    }

    // genSalt() is async
    bcrypt.genSalt( SALT_FACTOR, function( err, salt ) {
        if( err ) {
            return done( err ); // Mongoose will not insert the user document 
        }

        bcrypt.hash( user.password, salt, function( err, hashedPassword ) {
            if( err ) {
                return done( err );
            }

            user.password = hashedPassword;
            done(); // pass no arguments to done() to signify success
        });
    })

    console.log( 'executes immediately' );
});


mongoose.model( 'User', userSchema );