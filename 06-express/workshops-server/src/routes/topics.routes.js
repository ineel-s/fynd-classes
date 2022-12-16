const express = require( 'express' );
const {
    authenticate,
    authorize
} = require( '../middleware/auth' );
const {
    postTopic
} = require( '../controllers/topics.controllers' );

const router = express.Router();

router.post( '/', authenticate, authorize( 'admin' ), postTopic );

module.exports = router;