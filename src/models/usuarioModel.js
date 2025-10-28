import mongoose from "mongoose";

const options = { discriminatorKey: "rol", collection: "user"}

const userSchema = mongoose.Schema({
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  dni: String,
  cumpleanios: String,
  genero: String,
  celular: String,
  direccion: String,
  correo: String,
  password: String
}, options)

export const userModel = mongoose.model("user", userSchema)