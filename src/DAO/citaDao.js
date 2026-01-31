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

  async getCitaById(id) {

    return await citaModel.find({_id: id})
  }
}