import { citaDao } from "../DAO/citaDao.js"

export const citaService = {

  async createCita(data) {

    return await citaDao.createCita(data)
  },

  async leerCitas() {

    return await citaDao.leerCita()
  },
  
  async getCitaId(id) {

    return await citaDao.getCitaById(id)
  }
}