import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.MONGODB_URI;
const Connection = () => {
  mongoose.connect(URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB Successfully");
  });
  mongoose.connection.on("disconnected", (err) => {
    console.error("disconnected to  MongoDB");
  });
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err.message);
  });
};

export default Connection;
