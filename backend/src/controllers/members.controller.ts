import { Request, Response } from "express";
import { addMemberDB, getAllMembersDB, updateMemberDB, deleteMemberByIdDB, getMemberByIdDB } from "../models/members.model.js";

export const addMember = async (req: Request, res: Response) => {
    try {
        const { name, email, phNo, password, addr, membership, planStartDate, planEndDate } = req.body;
        const success = await addMemberDB(name, email, phNo, password, addr, membership, new Date(planStartDate), new Date(planEndDate));
        if (success) {
            res.status(201).json({ message: "Member added successfully" });
        } else {
            res.status(500).json({ error: "Failed to add member" });
        }
    } catch (error) {
        console.error("Error in addMember:", error);
    }
};

export const getMembers = async (_req: Request, res: Response) => {
    try {
        const members = await getAllMembersDB();
        res.status(200).json(members);
    } catch (error) {
        console.error("Error in getMembers:", error);
    }
};

export const updateMember = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedMember = await updateMemberDB(id, req.body);
        if (!updatedMember) {
            res.status(404).json({ error: "Member not found" });
        } else {
            res.status(200).json(updatedMember);
        }
    } catch (error) {
        console.error("Error in updateMember:", error);
    }
};

export const deleteMember = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const success = await deleteMemberByIdDB(id);
        if (success) {
            res.status(200).json({ message: "Member deleted successfully" });
        } else {
            res.status(404).json({ error: "Member not found" });
        }
    } catch (error) {
        console.error("Error in deleteMember:", error);
    }
};

export const getMemberById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const member = await getMemberByIdDB(id);
        if (!member) {
            res.status(404).json({ error: "Member not found" });
        } else {
            res.status(200).json(member);
        }
    } catch (error) {
        console.error("Error in getMemberById:", error);
    }
};