import express, { Request, Response } from 'express'
import 'dotenv/config'
import trainersRoutes from "./routes/trainers.routes.js"
import programsRoutes from "./routes/programs.routes.js"
import membershipsRoutes from "./routes/memberships.routes.js"
import contactsRoutes from "./routes/contacts.routes.js"
import locationsRoutes from "./routes/locations.routes.js"
import membersRotes from "./routes/members.routes.js"
import { connectMongoDBClient } from './config/db.js';

const app = express();

app.use(express.json());

app.use("/api/trainers", trainersRoutes);
app.use("/api/programs", programsRoutes);
app.use("/api/memberships", membershipsRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/locations", locationsRoutes);
app.use("/api/members", membersRotes);

app.get("/*", (req: Request, res: Response): void => {
    res.status(404).json({
        error: "Not Found"
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectMongoDBClient();
    console.log(`Started server at ${PORT}`);
})