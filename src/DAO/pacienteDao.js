import { pacienteModel } from "../models/pacienteModel.js"

export const pacienteDao = {

  async createPaciente(data) {

    return await pacienteModel.create(data)
  },

  async getPacienteDni(dnis) {

    return await pacienteModel.findOne({dni: dnis})
  }
}