import { fisioDao } from "../DAO/fisioDao.js";
import { hashedPassword } from "../utils/bcrypt.js";

export const fisioService = {

  async crearFisio(data) {

    data.password = hashedPassword(data.password)

    data.nombre = data.nombre.toUpperCase()
    data.apellidoPaterno = data.apellidoPaterno.toUpperCase()
    data.apellidoMaterno = data.apellidoMaterno.toUpperCase()

    return await fisioDao.createFisio(data)
  },
   
  async leerFisios() {

    return await fisioDao.readFisiote()
  },

  async getFisioById(id) {

    return await fisioDao.getById(id)
  },

  async getFisioByEspe(especialidd) {

    return await fisioDao.getFisioByEspecialidad(especialidd)
  }
}