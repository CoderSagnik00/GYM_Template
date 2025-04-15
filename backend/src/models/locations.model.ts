import { Collection, ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

const locations: Collection = getDB().collection("locations");

export const addLocationDB = async (name: string, img: string, addr: string, phNo: string, email: string, timing: string, details: string, lat: number, long: number): Promise<boolean> => {
    try {
        await locations.insertOne({ name, img, addr, phNo, email, timing, details, lat, long });
        return true;
    } catch (err) {
        throw new Error(`E: addLocationDB => ${err}`);
    }
};

export const getLocationByIdDB = async (id: string): Promise<any | null> => {
    try {
        const locationData = await locations.findOne({ _id: new ObjectId(id) });
        return locationData;
    } catch (err) {
        throw new Error(`E: getLocationByIdDB => ${err}`);
    }
};

export const updateLocationDB = async (id: string, updatedData: any): Promise<any> => {
    try {
        const result = await locations.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

        if (result.modifiedCount === 0) {
            throw new Error("Location update failed");
        }

        const updatedLocation = await locations.findOne({ _id: new ObjectId(id) });
        return updatedLocation;
    } catch (error) {
        throw new Error(`Error updating location: ${error}`);
    }
};

export const getAllLocationsDB = async (): Promise<any[]> => {
    try {
        const allLocations = await locations.find().toArray();
        return allLocations;
    } catch (error) {
        throw new Error(`Error fetching locations: ${error}`);
    }
};

export const deleteLocationByIdDB = async (id: string): Promise<boolean> => {
    try {
        const result = await locations.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return false;
        }

        return true;
    } catch (err) {
        console.error("Error in deleteLocationByIdDB:", err);
        throw new Error(`Error deleting location with id ${id}`);
    }
};