import "dotenv/config";
import mongoose from "mongoose";

export async function Connect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database connection established successfully");

    mongoose.connection.on("connected", () => {
      console.log("Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connection", err);
      process.exit();
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}
