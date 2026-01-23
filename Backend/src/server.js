import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

import UserRoutes from "./routes/user.routes.js";
import PostsRoutes from "./routes/posts.routes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use('/api/users', UserRoutes);
app.use("/api/posts", PostsRoutes);

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

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
