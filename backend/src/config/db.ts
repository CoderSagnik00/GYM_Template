import { MongoClient, Db } from "mongodb";

// MongoDB connection URI
const uri: string = process.env.MONGO_URI || '';  // Adjust the URI if your MongoDB instance is elsewhere

// Database and collection names
const dbName: string = process.env.DB_NAME || '';

const client = new MongoClient(uri);

export const connectMongoDBClient = async (): Promise<void> => {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Get the database and collection

    } catch (error) {
        throw new Error(`E: Mongodb Error => ${error}`);
    }
}

export const getClient = (): MongoClient => {
    return client;
}

export const getDB = (): Db => {
    const db = client.db(dbName);
    return db;
}
