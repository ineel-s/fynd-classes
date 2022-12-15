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
            return next( error );
        }

        // generate JWT
        const claims = {
            email: user.email,
            role: user.role
        };

        jwt.sign( claims, process.env.JWT_SECRET, { expiresIn: '7d' }, ( err, token ) => {
            if( err ) {
                err.name = Errors.InternalServerError;
                return next( err );
            }

            res.json({
                status: 'success',
                data: {
                    email: user.email,
                    role: user.role,
                    token
                }
            });
        });
    } catch( error ) {
        const err = new Error( 'Something went wrong during login' );
        err.name = Errors.InternalServerError;
        return next( err );
    }
};

module.exports = {
    register,
    login
};