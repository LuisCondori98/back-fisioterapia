import { pacienteDao } from "../DAO/pacienteDao.js"
import { hashedPassword } from "../utils/bcrypt.js"

export const pacienteService = {

  async crearPaciente(data) {

    data.password = hashedPassword(data.password)

    data.nombre = data.nombre.toUpperCase()
    data.apellidoPaterno = data.apellidoPaterno.toUpperCase()
    data.apellidoMaterno = data.apellidoMaterno.toUpperCase()

    return await pacienteDao.createPaciente(data)
  },

  async pacientegetByDni(dni) {

    return await pacienteDao.getPacienteDni(dni)
  },

  async updatePaciente(id, data) {

    return await pacienteDao.updPaciente(id, data)
  }
}