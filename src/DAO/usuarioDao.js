import { userModel } from "../models/usuarioModel.js"
import { hashedPassword } from "../utils/bcrypt.js"

export const usuarioDao = {

  async createUsuario(data) {

    return await userModel.create(data)
  },

  async readUsuarios() {

    return await userModel.find()
  },

  async updateUsuario(id, data) {

    return await userModel.findOneAndUpdate({_id: id}, {
                                                          nombre: data.nombre,
                                                          apellidoPaterno: data.apePaterno,
                                                          apellidoMaterno: data.apeMaterno,
                                                          celular: data.celular,
                                                          direccion: data.direccion,
                                                          correo: data.correo
                                                        })
  },

  async deleteUsuario(id) {

    return await userModel.deleteOne({_id: id})
  },

  async getUsuarioById(id) {

    return await userModel.findById(id)
  },

  async getUsuarioByRol(role) {

    return await userModel.find({rol: role})
  },
  
  async getUsuarioByCargo(cargo) {

    return await userModel.find({cargo: cargo})
  },

  async updatePassword(correo, pass) {

    return await userModel.findOneAndUpdate({correo}, {password: pass})
  },

  async getByDni(dni) {

    return await userModel.findOne(dni)
  },

  async byNombre(nombre) {

    return await userModel.find({nombre: { $regex: `^${nombre}`, $options: "i"}})
  },

  async updateEstadoUser(idUser, data){

    return await userModel.findOneAndUpdate({_id: idUser}, {$set: data})
  }
}