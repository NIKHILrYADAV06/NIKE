import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}