import "dotenv/config";
import mongoose from "mongoose";

async function dbConnect() {
  mongoose.set('strictQuery', false);
  const DB_URI = process.env.URI_MONGO;
  await mongoose.connect(DB_URI);
}

export default dbConnect;