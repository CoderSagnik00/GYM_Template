import { Request, Response } from "express";
import { addContact as addContactDB, getAllContacts as getAllContactsDB, updateContact as updateContactDB, deleteContactById as deleteContactByIdDB, getContactById as getContactByIdDB } from "../models/contacts.model.js";

export const addContact = async (req: Request, res: Response) => {
    try {
        const { phNo, email, officeHours } = req.body;
        const success = await addContactDB(phNo, email, officeHours);
        if (success) {
            res.status(201).json({ message: "Contact added successfully" });
        } else {
            res.status(500).json({ error: "Failed to add contact" });
        }
    } catch (error) {
        console.error("Error in addContact:", error);
    }
};

export const getContacts = async (_req: Request, res: Response) => {
    try {
        const contacts = await getAllContactsDB();
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error in getContacts:", error);
    }
};

export const updateContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedContact = await updateContactDB(id, req.body);
        if (!updatedContact) {
            res.status(404).json({ error: "Contact not found" });
        } else {
            res.status(200).json(updatedContact);
        }
    } catch (error) {
        console.error("Error in updateContact:", error);
    }
};

export const deleteContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const success = await deleteContactByIdDB(id);
        if (success) {
            res.status(200).json({ message: "Contact deleted successfully" });
        } else {
            res.status(404).json({ error: "Contact not found" });
        }
    } catch (error) {
        console.error("Error in deleteContact:", error);
    }
};

export const getContactById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const contact = await getContactByIdDB(id);
        if (!contact) {
            res.status(404).json({ error: "Contact not found" });
        } else {
            res.status(200).json(contact);
        }
    } catch (error) {
        console.error("Error in getContactById:", error);
    }
};