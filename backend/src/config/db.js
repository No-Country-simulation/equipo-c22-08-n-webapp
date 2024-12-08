import "dotenv/config";
import mongoose from "mongoose";

async function dbConnect() {
  mongoose.set('strictQuery', false);
  const DB_URI = process.env.DB_URI;
  await mongoose.connect(DB_URI);
}

export default dbConnect;