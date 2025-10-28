import mongoose from "mongoose"

const contactoSchema = mongoose.Schema({

  nombres: String,
  correo: String,
  telefono: String,
  asunto: String,
  mensaje: String
})

export const contactoModel = mongoose.model("contacto", contactoSchema)