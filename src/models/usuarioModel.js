import mongoose from "mongoose";

const options = { discriminatorKey: "rol", collection: "user"}

const userSchema = mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  dni: {
    type: String,
    unique: true,
    required: true
  },
  cumpleanios: String,
  genero: String,
  img: String,
  celular: String,
  direccion: String,
  correo: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ["activo", "inactivo"],
    default: "activo"
  }
}, options)

export const userModel = mongoose.model("user", userSchema)