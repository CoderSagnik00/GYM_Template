import { Collection, ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

const program: Collection = getDB().collection("program");

export const addProgram = async (name: string, desc: string, details: string, features: string, classTiming: string): Promise<boolean> => {
    try {
        await program.insertOne({ name, desc, details, features, classTiming });
        return true;
    } catch (err) {
        throw new Error(`E: addProgram => ${err}`);
    }
};

export const getProgramById = async (id: string): Promise<any | null> => {
    try {
        const programData = await program.findOne({ _id: new ObjectId(id) });
        return programData;
    } catch (err) {
        throw new Error(`E: getProgramById => ${err}`);
    }
};

export const updateProgram = async (id: string, updatedData: any): Promise<any> => {
    try {
        const result = await program.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

        if (result.modifiedCount === 0) {
            throw new Error("Program update failed");
        }

        const updatedProgram = await program.findOne({ _id: new ObjectId(id) });
        return updatedProgram;
    } catch (error) {
        throw new Error(`Error updating program: ${error}`);
    }
};

export const getAllPrograms = async (): Promise<any[]> => {
    try {
        const programs = await program.find().toArray();
        return programs;
    } catch (error) {
        throw new Error(`Error fetching programs: ${error}`);
    }
};

export const deleteProgramById = async (id: string): Promise<boolean> => {
    try {
        const result = await program.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Error in deleteProgramById:", err);
        throw new Error(`Error deleting program with id ${id}`);
    }
};