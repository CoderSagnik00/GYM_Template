import { Request, Response } from "express";
import { addMembershipDB, getAllMembershipsDB, updateMembershipDB, deleteMembershipByIdDB, getMembershipByIdDB } from "../models/memberships.model.js";

export const addMembership = async (req: Request, res: Response) => {
    try {
        const { name, price, features } = req.body;
        const success = await addMembershipDB(name, price, features);
        if (success) {
            res.status(201).json({ message: "Membership added successfully" });
        } else {
            res.status(500).json({ error: "Failed to add membership" });
        }
    } catch (error) {
        console.error("Error in addMembership:", error);
    }
};

export const getMemberships = async (_req: Request, res: Response) => {
    try {
        const memberships = await getAllMembershipsDB();
        res.status(200).json(memberships);
    } catch (error) {
        console.error("Error in getMemberships:", error);
    }
};

export const updateMembership = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedMembership = await updateMembershipDB(id, req.body);
        if (!updatedMembership) {
            res.status(404).json({ error: "Membership not found" });
        } else {
            res.status(200).json(updatedMembership);
        }
    } catch (error) {
        console.error("Error in updateMembership:", error);
    }
};

export const deleteMembership = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const success = await deleteMembershipByIdDB(id);
        if (success) {
            res.status(200).json({ message: "Membership deleted successfully" });
        } else {
            res.status(404).json({ error: "Membership not found" });
        }
    } catch (error) {
        console.error("Error in deleteMembership:", error);
    }
};

export const getMembershipById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const membership = await getMembershipByIdDB(id);
        if (!membership) {
            res.status(404).json({ error: "Membership not found" });
        } else {
            res.status(200).json(membership);
        }
    } catch (error) {
        console.error("Error in getMembershipById:", error);
    }
};