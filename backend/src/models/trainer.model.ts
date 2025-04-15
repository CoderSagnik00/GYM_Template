import { Collection, ObjectId } from "mongodb";
import { getDB } from "../config/db.js";


const trainer: Collection = getDB().collection("trainer");

export const addTrainer = async (name: string, desg: string, shortDesc: string, details: string, certifications: string, specialization: string): Promise<boolean> => {
    try {
        const isAvailable: boolean = true;
        await trainer.insertOne({ name, desg, shortDesc, details, certifications, specialization, isAvailable });
        return true;
    } catch (err) {
        throw new Error(`E: addTrainer => ${err}`);
    }
}

export const getTrainerById = async (id: string): Promise<any | null> => {
    try {
        const trainerData = await trainer.findOne({ _id: new ObjectId(id) });
        return trainerData;
    } catch (err) {
        throw new Error(`E: getTrainer => ${err}`);
    }
};

export const updateTrainer = async (id: string, updatedData: any): Promise<any> => {
    try {
        // Update the trainer document in the database by ID with only the provided fields
        const result = await trainer.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

        if (result.modifiedCount === 0) {
            throw new Error("Trainer update failed");
        }

        // Fetch the updated trainer data to return
        const updatedTrainer = await trainer.findOne({ _id: new ObjectId(id) });
        return updatedTrainer;
    } catch (error) {
        throw new Error(`Error updating trainer: ${error}`);
    }
};


export const getAllTrainers = async (): Promise<any[]> => {
    try {
        const trainers = await trainer.find().toArray();
        return trainers;
    } catch (error) {
        throw new Error(`Error fetching trainers: ${error}`);
    }
};

export const deleteTrainerById = async (id: string): Promise<boolean> => {
    try {
        const result = await trainer.deleteOne({ _id: new ObjectId(id) });

        // If no document is deleted, return false
        if (result.deletedCount === 0) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Error in deleteTrainerById:", err);
        throw new Error(`Error deleting trainer with id ${id}`);
    }
};