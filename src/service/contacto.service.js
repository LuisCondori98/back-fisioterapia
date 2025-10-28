import { contactoDao } from "../DAO/contactoDao.js"

export const contactoService = {

  async crearContacto(data) {

    return await contactoDao.createContacto(data)
  },

  async leerContacto() {

    return await contactoDao.readContactos()
  }
}