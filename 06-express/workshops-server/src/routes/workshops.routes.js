// Routes - File which sets up the routes to their corresponding controllers
const { Router } = require( 'express' );
const WorkshopsCtrl = require( '../controllers/workshops.controllers' );

const router = Router();

router.get( '/', WorkshopsCtrl.getWorkshops );
router.get( '/:id', WorkshopsCtrl.getWorkshop );
router.post( '/', WorkshopsCtrl.postWorkshop );
// router.patch( '/:id/:action', WorkshopsCtrl.patchWorkshop );
router.patch( '/:id', WorkshopsCtrl.patchWorkshop );

module.exports = router;