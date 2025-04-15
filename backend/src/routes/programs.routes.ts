import { Router } from "express";
import { addProgramController, getProgramController, updateProgramController, deleteProgramController } from "../controllers/program.controller.js";
import { validateParams, validateAnyParam } from "../middleware/validateParams.middleware.js";

const router = Router();

router.post("/", validateParams(['name', 'desc', 'details', 'features', 'classTiming']), addProgramController);
router.get("/", getProgramController);
router.patch("/:id", validateAnyParam(['name', 'desc', 'details', 'features', 'classTiming']), updateProgramController);
router.delete("/:id", deleteProgramController);

export default router;