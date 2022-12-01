const { Router } = require( 'express' );
const WorkshopsCtrl = require( '../controllers/workshops.controllers' );

const router = Router();

router.get( '/', WorkshopsCtrl.getWorkshops );
router.post( '/', WorkshopsCtrl.postWorkshops );

module.exports = router;