const jwt = require( 'jsonwebtoken' );
const UserService = require( '../services/auth.services' );
const { Errors } = require( '../constants' );

const register = async ( req, res, next ) => {
    if( Object.keys( req.body ).length === 0 ) {
        return res.status( 400 ).json({
            status: 'error',
            message: `Request body is missing, and needs to have user details`
        });
    }

    try {
        const user = await UserService.addUser( req.body );
        const userObj = user.toObject();

        // not a good idea to send back the password
        delete userObj.password;

        res.status( 201 ).json({
            status: 'success',
            data: userObj
        });
    } catch( error ) {
        next( error );
    }
};

const login = async ( req, res, next ) => {
    if( Object.keys( req.body ).length === 0 ) {
        return res.status( 400 ).json({
            status: 'error',
            message: `Request body is missing, and needs to have login details`
        });
    }

    try {
        const user = await UserService.validateUser( req.body );

        if( !user ) {
            const error = new Error( 'Invalid credentials' );
            error.name = Errors.Unauthorized;
            next( error );
        }

        // generate JWT
        const claims = {
            email: user.email,
            role: user.role
        };

        jwt.sign( process.env.JWT_SECRET )

        res.json({
            status: 'success',
            data: user
        });
    } catch( error ) {
        const err = new Error( 'Something went wrong during login' );
        err.name = Errors.InternalServerError;
    }
};

module.exports = {
    register,
    login
};