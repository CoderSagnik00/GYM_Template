import { Request, Response } from "express";
import { addTrainer as addTrainerToDB, getTrainerById, getAllTrainers, updateTrainer as updateTrainerInDB } from "../models/trainer.model.js"; // adjust path if needed

export const addTrainer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, desg, shortDesc, details, certifications, specialization } = req.body;

        const success = await addTrainerToDB(name, desg, shortDesc, details, certifications, specialization);

        if (success) {
            res.status(201).json({ message: "Trainer added successfully." });
        } else {
            res.status(500).json({ message: "Failed to add trainer." });
        }
    } catch (error) {
        console.error("Error in addTrainer controller:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

export const getTrainer = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.query;

    try {
        // If id is provided, fetch a specific trainer by id
        if (id) {
            const trainer = await getTrainerById(id as string); // Ensure `id` is a string

            if (!trainer) {
                res.status(404).json({ message: "Trainer not found" });
                return;
            }

            res.status(200).json(trainer);
        } else {
            // If no id is provided, fetch all trainers
            const trainers = await getAllTrainers();
            res.status(200).json(trainers);
        }
    } catch (error) {
        console.error("Error in getTrainer controller:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

export const updateTrainer = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params; // Trainer ID is passed in the URL path
    const { name, desg, shortDesc, details, certifications, specialization } = req.body;

    try {
        // Step 1: Check if the trainer exists by ID
        const existingTrainer = await getTrainerById(id);

        if (!existingTrainer) {
            // If trainer not found, return a 404 error
            res.status(404).json({ message: "Trainer not found" });
            return;
        }

        // Step 2: Construct the update object dynamically, only including fields that are provided
        const updatedData: any = {};

        if (name) updatedData.name = name;
        if (desg) updatedData.desg = desg;
        if (shortDesc) updatedData.shortDesc = shortDesc;
        if (details) updatedData.details = details;
        if (certifications) updatedData.certifications = certifications;
        if (specialization) updatedData.specialization = specialization;

        // Step 3: Update the trainer's details
        const updatedTrainer = await updateTrainerInDB(id, updatedData);

        // Step 4: Return the updated trainer data
        res.status(200).json(updatedTrainer);
    } catch (error) {
        console.error("Error in updateTrainer controller:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};