import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import UserRouter from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use('/api/users', UserRouter);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server started on port ${ENV.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
