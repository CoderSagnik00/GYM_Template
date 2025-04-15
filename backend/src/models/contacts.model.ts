import { Collection, ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

const contacts: Collection = getDB().collection("contacts");

export const addContact = async (phNo: string, email: string, officeHours: string): Promise<boolean> => {
    try {
        await contacts.insertOne({ phNo, email, officeHours });
        return true;
    } catch (err) {
        throw new Error(`E: addContact => ${err}`);
    }
};

export const getContactById = async (id: string): Promise<any | null> => {
    try {
        const contactData = await contacts.findOne({ _id: new ObjectId(id) });
        return contactData;
    } catch (err) {
        throw new Error(`E: getContactById => ${err}`);
    }
};

export const updateContact = async (id: string, updatedData: any): Promise<any> => {
    try {
        const result = await contacts.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

        if (result.modifiedCount === 0) {
            throw new Error("Contact update failed");
        }

        const updatedContact = await contacts.findOne({ _id: new ObjectId(id) });
        return updatedContact;
    } catch (error) {
        throw new Error(`Error updating contact: ${error}`);
    }
};

export const getAllContacts = async (): Promise<any[]> => {
    try {
        const allContacts = await contacts.find().toArray();
        return allContacts;
    } catch (error) {
        throw new Error(`Error fetching contacts: ${error}`);
    }
};

export const deleteContactById = async (id: string): Promise<boolean> => {
    try {
        const result = await contacts.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Error in deleteContactById:", err);
        throw new Error(`Error deleting contact with id ${id}`);
    }
};