import { citaModel } from "../models/citasModel.js"

export const citaDao = {

  async createCita(data) {

    const cita = await citaModel.create(data)

    const citaCreated = await citaModel.findById(cita._id)
                              .populate("paciente")
                              .populate("terapeuta")
    return citaCreated
  },

  async leerCita() {

    return await citaModel.find()
        .populate("paciente", "nombre apellidoPaterno dni")
        .populate("terapeuta", "nombre apellidoPaterno especialidad");
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