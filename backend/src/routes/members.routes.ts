import { Router } from "express";
import { addMember, getMembers, updateMember, deleteMember, getMemberById } from "../controllers/members.controller.js";
import { validateParams, validateAnyParam } from "../middleware/validateParams.middleware.js";

const router = Router();

router.post("/", validateParams(['name', 'email', 'phNo', 'password', 'addr', 'membership', 'planStartDate', 'planEndDate']), addMember);
router.get("/", getMembers);
router.get("/:id", getMemberById);
router.patch("/:id", validateAnyParam(['name', 'email', 'phNo', 'password', 'addr', 'membership', 'planStartDate', 'planEndDate']), updateMember);
router.delete('/:id', deleteMember);

export default router;