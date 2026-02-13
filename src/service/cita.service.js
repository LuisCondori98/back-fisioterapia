import { citaDao } from "../DAO/citaDao.js"

export const citaService = {

  async createCita(data) {

    return await citaDao.createCita(data)
  },

  async leerCitas() {

    return await citaDao.leerCita()
  },
  
  async getCitaIdFisio(id) {

    return await citaDao.getCitaIdFisi(id)
  }, 

  async getCitaIdPacien(id) {

    return await citaDao.getCitaIdPac(id)
  },

  async updateCitaId(id, data) {

    return await citaDao.updateCitaById(id, data)
  },
  
  async deleteCita(id) {

    return await citaDao.deleteCitaById(id)
  }
}