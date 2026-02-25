import { pacienteModel } from "../models/pacienteModel.js"

export const pacienteDao = {

  async createPaciente(data) {

    return await pacienteModel.create(data)
  },

  async getPacienteDni(dnis) {

    return await pacienteModel.findOne({dni: dnis})
  },

  async updPaciente(pacienteId, data) {

    return await pacienteModel.findByIdAndUpdate({_id: pacienteId}, {$set: data})
  }
}