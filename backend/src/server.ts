import express from 'express'
import 'dotenv/config'
import trainersRoutes from "./routes/trainers.routes.js"
import { connectMongoDBClient } from './config/db.js';

const app = express();

app.use(express.json());

app.use("/api/trainers", trainersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectMongoDBClient();
    console.log(`Started server at ${PORT}`);
})