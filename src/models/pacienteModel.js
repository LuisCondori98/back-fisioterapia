import mongoose from "mongoose";
import { userModel } from "./usuarioModel.js";

const pacienteSchema = new mongoose.Schema({
  historialMedico: String,
  alergias: String,
  // citas: [{
  //   fecha: Date,
  //   fisioterapeuta: {
  //     type: mongoose.Schema.Types.ObjectId, ref: "user",
  //     motivo: String,
  //     estado: {
  //       type: String,
  //       default: "pendiente"
  //     }
  //   }
  // }]
});

export const pacienteModel = userModel.discriminator("paciente", pacienteSchema);