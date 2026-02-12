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

  async getCitaByIdFisi(terapeutaId) {

    return await citaModel
                        .findOne({ terapeuta: terapeutaId })
                        .populate("paciente", "nombre apellidoPaterno apellidoMaterno")
                        .populate("terapeuta", "nombre apellidoPaterno apellidoMaterno")
  }, 

  async getCitaIdPac(pacienteId) {

    return await citaModel
                        .findOne({ paciente: pacienteId })
                        .populate("paciente", "nombre apellidoPaterno apellidoMaterno")
                        .populate("terapeuta", "nombre apellidoPaterno apellidoMaterno")
  }
}