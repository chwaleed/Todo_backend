import "dotenv/config";
import mongoose from "mongoose";

export async function Connect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database connection established successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application on connection failure
  }
}
