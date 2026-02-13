import { citaModel } from "../models/citasModel.js"

export const citaDao = {

  async createCita(data) {

    return await citaModel.create(data)
  },

  async leerCita() {

    return await citaModel.find()
        .populate("paciente", "nombre apellido dni")
        .populate("terapeuta", "nombre apellido especialidad");
  },

  async getCitaIdFisi(terapeutaId) {

    return await citaModel
                        .find({ terapeuta: terapeutaId })
                        .populate("paciente", "nombre apellidoPaterno apellidoMaterno")
                        .populate("terapeuta", "nombre apellidoPaterno apellidoMaterno")
  }, 

  async getCitaIdPac(pacienteId) {

    return await citaModel
                        .find({ paciente: pacienteId })
                        .populate("paciente", "nombre apellidoPaterno apellidoMaterno")
                        .populate("terapeuta", "nombre apellidoPaterno apellidoMaterno")
  },

  async updateCitaById(citaId, data) {

    return await citaModel.findByIdAndUpdate({_id: citaId}, {$set: data})
  },

  async deleteCitaById(citaId) {

    return await citaModel.findByIdAndDelete(citaId)
  }
}