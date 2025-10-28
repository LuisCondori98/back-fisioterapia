import mongoose from "mongoose";
import { userModel } from "./usuarioModel.js";

const adminSchema = mongoose.Schema({
  cargo: {
    type: String,
    enum: ["gerente", "cajero", "recepcionista"]
  }
})

export const adminModel = userModel.discriminator("admin", adminSchema)