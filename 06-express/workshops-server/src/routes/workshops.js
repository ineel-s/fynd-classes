const { Router } = require( 'express' );

const router = Router();

router.get( '/', ( req, res ) => {
    res.json({
        status: 'success',
        data: [
            'Vue',
            'Express'
        ]
    });
});

// EXERCISE: Add a POST /workshops request handler


module.exports = router;