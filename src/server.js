import dotenv from "dotenv"
import { app } from "./app.js";
import { connectDB } from "./database/connectMongo.js";
import os from "os"
import logger from "./logger.js";
import { debug } from "console";

dotenv.config()

const PORT = process.env.PORT || 8080

 connectDB()

app.get("/", (req, res) => {

  return res.json({
    status: "success",
    date: new Date().toLocaleString(),
    user: os.hostname()
  })
})

app.listen(PORT, () => {

  logger.info(`Listening server on Port http://localhost:8080`)  
})