const { Router } = require( 'express' );

const router = Router();

// router.<http_method>()
router.get( '/', ( req, res ) => {
    res.end( 'This is the workshops server' );
});

module.exports = router;