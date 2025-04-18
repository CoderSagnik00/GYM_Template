import { Router } from "express";
import { addTrainer, getTrainer, updateTrainer, deleteTrainer } from "../controllers/trainer.controller.js";
import { validateAnyParam, validateParams } from "../middleware/validateParams.middleware.js";

const router = Router();

router.post("/", validateParams(['name', 'desg', 'shortDesc', 'details', 'certifications', 'specialization']), addTrainer);
router.get("/", getTrainer);
router.patch("/:id", validateAnyParam(['name', 'desg', 'shortDesc', 'details', 'certifications', 'specialization']), updateTrainer);
router.delete('/:id', deleteTrainer);

export default router;