import { Router } from "express";
import { addMembership, getMemberships, updateMembership, deleteMembership, getMembershipById } from "../controllers/memberships.controller.js";
import { validateParams, validateAnyParam } from "../middleware/validateParams.middleware.js";

const router = Router();

router.post("/", validateParams(['name', 'price', 'features']), addMembership);
router.get("/", getMemberships);
router.get("/:id", getMembershipById);
router.patch("/:id", validateAnyParam(['name', 'price', 'features']), updateMembership);
router.delete('/:id', deleteMembership);

export default router;