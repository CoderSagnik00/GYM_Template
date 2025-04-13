import { Request, Response } from "express";
import { addProgram, getProgramById, updateProgram, getAllPrograms, deleteProgramById } from "../models/program.model.js";

export const addProgramController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, desc, details, features, classTiming } = req.body;
        const success = await addProgram(name, desc, details, features, classTiming);

        if (success) {
            res.status(201).json({ message: "Program added successfully." });
        } else {
            res.status(500).json({ message: "Failed to add program." });
        }
    } catch (error) {
        console.error("Error in addProgramController:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

export const getProgramController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.query;

    try {
        if (id) {
            const program = await getProgramById(id as string);

            if (!program) {
                res.status(404).json({ message: "Program not found" });
                return;
            }

            res.status(200).json(program);
        } else {
            const programs = await getAllPrograms();
            res.status(200).json(programs);
        }
    } catch (error) {
        console.error("Error in getProgramController:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

export const updateProgramController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, desc, details, features, classTiming } = req.body;

    try {
        const existingProgram = await getProgramById(id);

        if (!existingProgram) {
            res.status(404).json({ message: "Program not found" });
            return;
        }

        const updatedData: any = {};

        if (name) updatedData.name = name;
        if (desc) updatedData.desc = desc;
        if (details) updatedData.details = details;
        if (features) updatedData.features = features;
        if (classTiming) updatedData.classTiming = classTiming;

        const updatedProgram = await updateProgram(id, updatedData);
        res.status(200).json(updatedProgram);
    } catch (error) {
        console.error("Error in updateProgramController:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

export const deleteProgramController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const success = await deleteProgramById(id);

        if (success) {
            res.status(200).json({ message: "Program deleted successfully." });
        } else {
            res.status(404).json({ message: "Program not found." });
        }
    } catch (error) {
        console.error("Error in deleteProgramController:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};