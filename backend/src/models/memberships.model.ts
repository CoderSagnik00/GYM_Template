import { Collection, ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

const memberships: Collection = getDB().collection("memberships");

export const addMembershipDB = async (name: string, price: number, features: string[]): Promise<boolean> => {
    try {
        await memberships.insertOne({ name, price, features });
        return true;
    } catch (err) {
        throw new Error(`E: addMembershipDB => ${err}`);
    }
};

export const getMembershipByIdDB = async (id: string): Promise<any | null> => {
    try {
        const membershipData = await memberships.findOne({ _id: new ObjectId(id) });
        return membershipData;
    } catch (err) {
        throw new Error(`E: getMembershipByIdDB => ${err}`);
    }
};

export const updateMembershipDB = async (id: string, updatedData: any): Promise<any> => {
    try {
        const result = await memberships.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

        if (result.modifiedCount === 0) {
            throw new Error("Membership update failed");
        }

        const updatedMembership = await memberships.findOne({ _id: new ObjectId(id) });
        return updatedMembership;
    } catch (error) {
        throw new Error(`Error updating membership: ${error}`);
    }
};

export const getAllMembershipsDB = async (): Promise<any[]> => {
    try {
        const allMemberships = await memberships.find().toArray();
        return allMemberships;
    } catch (error) {
        throw new Error(`Error fetching memberships: ${error}`);
    }
};

export const deleteMembershipByIdDB = async (id: string): Promise<boolean> => {
    try {
        const result = await memberships.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Error in deleteMembershipByIdDB:", err);
        throw new Error(`Error deleting membership with id ${id}`);
    }
};