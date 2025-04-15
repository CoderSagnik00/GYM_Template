import { Collection, ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

const members: Collection = getDB().collection("members");

export const addMemberDB = async (name: string, email: string, phNo: string, password: string, addr: string, membership: string, planStartDate: Date, planEndDate: Date): Promise<boolean> => {
    try {
        await members.insertOne({ name, email, phNo, password, addr, membership, planStartDate, planEndDate });
        return true;
    } catch (err) {
        throw new Error(`E: addMemberDB => ${err}`);
    }
};

export const getMemberByIdDB = async (id: string): Promise<any | null> => {
    try {
        const memberData = await members.findOne({ _id: new ObjectId(id) });
        return memberData;
    } catch (err) {
        throw new Error(`E: getMemberByIdDB => ${err}`);
    }
};

export const updateMemberDB = async (id: string, updatedData: any): Promise<any> => {
    try {
        const result = await members.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

        if (result.modifiedCount === 0) {
            throw new Error("Member update failed");
        }

        const updatedMember = await members.findOne({ _id: new ObjectId(id) });
        return updatedMember;
    } catch (error) {
        throw new Error(`Error updating member: ${error}`);
    }
};

export const getAllMembersDB = async (): Promise<any[]> => {
    try {
        const allMembers = await members.find().toArray();
        return allMembers;
    } catch (error) {
        throw new Error(`Error fetching members: ${error}`);
    }
};

export const deleteMemberByIdDB = async (id: string): Promise<boolean> => {
    try {
        const result = await members.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Error in deleteMemberByIdDB:", err);
        throw new Error(`Error deleting member with id ${id}`);
    }
};