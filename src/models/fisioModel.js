import mongoose from "mongoose";
import { userModel } from "./usuarioModel.js";

const fisioterapeutaSchema = new mongoose.Schema({
  especialidad: String,
  colegiatura: String,
  universidad: String,
  descProfesional: String
});

export const fisioModel = userModel.discriminator("fisioterapeuta", fisioterapeutaSchema);