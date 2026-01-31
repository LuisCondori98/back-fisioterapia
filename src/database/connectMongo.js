import mongoose from "mongoose";
import logger from "../logger.js";

export const connectDB = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI)

    logger.info("Connected to mongoDB success")
  } catch(err) {

    logger.error("Error connect to mongoDB", err)
  }
}