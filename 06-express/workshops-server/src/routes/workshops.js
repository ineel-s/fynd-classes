const { Router } = require( 'express' );

const router = Router();

router.get( '/workshops', ( req, res ) => {
    res.json({
        status: 'success',
        data: [
            'Vue',
            'Express'
        ]
    });
});

module.exports = router;