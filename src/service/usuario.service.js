import { usuarioDao } from "../DAO/usuarioDao.js";
import { hashedPassword } from "../utils/bcrypt.js";

export const usuarioService = {

  async crearUsuario(data) {

    data.password = hashedPassword(data.password)

    data.nombre = data.nombre.toUpperCase()
    data.apellidoPaterno = data.apellidoPaterno.toUpperCase()
    data.apellidoMaterno = data.apellidoMaterno.toUpperCase()

    return await usuarioDao.createUsuario(data)
  },

  async leerUsuarios() {

    return await usuarioDao.readUsuarios()
  },

  async modificarUsuario(id, data) {

    return await usuarioDao.updateUsuario(id, data)
  },

  async eliminarUsuario(id) {

    return await usuarioDao.deleteUsuario(id)
  },

  async leerUsuarioById(id) {

    return await usuarioDao.getUsuarioById(id)
  },

  async leerUsuarioRol(rol) {

    return await usuarioDao.getUsuarioByRol(rol)
  },

  async leerUsuarioCargo(cargo) {

    return await usuarioDao.getUsuarioByCargo(cargo)
  },

  async modificarContra(correo, pass) {

    pass = hashedPassword(pass)

    return await usuarioDao.updatePassword(correo, pass)
  },

  async getUserDni(dnis) {

    return await usuarioDao.getByDni({dni: dnis})
  },

  async getByNombre (nombre) {

    return await usuarioDao.byNombre(nombre)
  },

  async deleteUserById(id){

    return await usuarioDao.deleteUsuario(id)
  },

  async updateUserStatus(id, data) {

    return await usuarioDao.updateEstadoUser(id, data)
  }
}