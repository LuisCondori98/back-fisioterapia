import mongoose from "mongoose";

const citaSchema = new mongoose.Schema({
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "paciente", // referencia al paciente
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  terapeuta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "fisioterapeuta",
    required: true,
  },
  motivo: {
    type: String,
  },
  precio: {
    type: Number,
    default: 60
  },
  estado: {
    type: String,
    enum: ["pendiente", "confirmada", "cancelada", "completada"],
    default: "pendiente",
  },
});

export const citaModel = mongoose.model("cita", citaSchema);