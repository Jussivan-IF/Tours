import express from 'express';
import LocationController from '../controller/locationsController.js'
import { validateLocationId, validateCoordinates } from '../middlewares/validateRequest.js';

const router = express.Router()

router.get('/all', validateCoordinates, LocationController.getLocations);
router.get('/location-components', LocationController.getLocationsWithComponents);
router.get('/location-components/:id', validateLocationId, LocationController.getLocationsWithComponentsById);

export default router;