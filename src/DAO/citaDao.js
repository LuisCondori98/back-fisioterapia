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

  async getCitaById(terapeutaId) {

    return await citaModel
                        .find({ terapeuta: terapeutaId })
                        .populate("paciente", "nombre apellidoPaterno apellidoMaterno")
                        .populate("terapeuta", "nombre apellidoPaterno")
  }
}