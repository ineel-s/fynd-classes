const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

const User = mongoose.model( 'User' );

const addUser = ( newUserDetails ) => {
    return User.create( newUserDetails );
};

const validateUser = async ( loginUser ) => {
    // STEP 1: Does a user with this email exist?
    // find() returns an array, findOne() returns an object
    const user = await User.findOne({
        email: loginUser.email
    });

    if( !user ) {
        return null;
    }

    // Step 2: Does this user (with encrypted password) have the same password as the login password (plain text)
    const isMatch = await bcrypt.compare( loginUser.password, user.password );

    if( !isMatch ) {
        return null;
    }

    return user;
}

module.exports = {
    addUser,
    validateUser
};