// Routes - File which sets up the routes to their corresponding controllers
const { Router } = require( 'express' );
const {
    authenticate,
    authorize
} = require( '../middleware/auth' );
const WorkshopsCtrl = require( '../controllers/workshops.controllers' );

const router = Router();

router.get( '/', authenticate, WorkshopsCtrl.getWorkshops );
router.get( '/:id', authenticate, WorkshopsCtrl.getWorkshop );
router.post( '/', authenticate, authorize( 'admin' ), WorkshopsCtrl.postWorkshop );
// router.patch( '/:id/:action', authenticate, WorkshopsCtrl.patchWorkshop );
router.patch( '/:id', authenticate, WorkshopsCtrl.patchWorkshop );
router.delete( '/:id', authenticate, WorkshopsCtrl.deleteWorkshop );
router.get( '/:id/topics', WorkshopsCtrl.getTopics );
router.post( '/:id/topics', WorkshopsCtrl.postTopic );

module.exports = router;