import mongoose from "mongoose";
import { userModel } from "./usuarioModel.js";

const pacienteSchema = new mongoose.Schema({
  historialMedico: [String],
  alergias: [String]
});

export const pacienteModel = userModel.discriminator("paciente", pacienteSchema);