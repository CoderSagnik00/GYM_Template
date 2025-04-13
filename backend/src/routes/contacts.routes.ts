import { Router } from "express";
import { addContact, getContacts, updateContact, deleteContact } from "../controllers/contacts.controller.js";
import { validateParams, validateAnyParam } from "../middleware/validateParams.middleware.js";

const router = Router();

router.post("/", validateParams(['phNo', 'email', 'officeHours']), addContact);
router.get("/", getContacts);
router.patch("/:id", validateAnyParam(['phNo', 'email', 'officeHours']), updateContact);
router.delete('/:id', deleteContact);

export default router;