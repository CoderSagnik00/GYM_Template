import { Router } from "express";
import { addLocation, getLocations, updateLocation, deleteLocation, getLocationById } from "../controllers/locations.controller.js";
import { validateParams, validateAnyParam } from "../middleware/validateParams.middleware.js";

const router = Router();

router.post("/", validateParams(['name', 'img', 'addr', 'phNo', 'email', 'timing', 'Details', 'lat', 'long']), addLocation);
router.get("/", getLocations);
router.get("/:id", getLocationById);
router.patch("/:id", validateAnyParam(['name', 'img', 'addr', 'phNo', 'email', 'timingDetails', 'lat', 'long']), updateLocation);
router.delete('/:id', deleteLocation);

export default router;