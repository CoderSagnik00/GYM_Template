import { Request, Response } from "express";
import { addLocationDB, getAllLocationsDB, updateLocationDB, deleteLocationByIdDB, getLocationByIdDB } from "../models/locations.model.js";

export const addLocation = async (req: Request, res: Response) => {
    try {
        const { name, img, addr, phNo, email, timing, Details, lat, long } = req.body;
        const success = await addLocationDB(name, img, addr, phNo, email, timing, Details, lat, long);
        if (success) {
            res.status(201).json({ message: "Location added successfully" });
        } else {
            res.status(500).json({ error: "Failed to add location" });
        }
    } catch (error) {
        console.error("Error in addLocation:", error);
    }
};

export const getLocations = async (_req: Request, res: Response) => {
    try {
        const locations = await getAllLocationsDB();
        res.status(200).json(locations);
    } catch (error) {
        console.error("Error in getLocations:", error);
    }
};

export const updateLocation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedLocation = await updateLocationDB(id, req.body);
        if (!updatedLocation) {
            res.status(404).json({ error: "Location not found" });
        } else {
            res.status(200).json(updatedLocation);
        }
    } catch (error) {
        console.error("Error in updateLocation:", error);
    }
};

export const deleteLocation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const success = await deleteLocationByIdDB(id);
        if (success) {
            res.status(200).json({ message: "Location deleted successfully" });
        } else {
            res.status(404).json({ error: "Location not found" });
        }
    } catch (error) {
        console.error("Error in deleteLocation:", error);
    }
};

export const getLocationById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const location = await getLocationByIdDB(id);
        if (!location) {
            res.status(404).json({ error: "Location not found" });
        } else {
            res.status(200).json(location);
        }
    } catch (error) {
        console.error("Error in getLocationById:", error);
    }
};