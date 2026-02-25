import { fisioModel } from "../models/fisioModel.js";

export const fisioDao = {

  async createFisio(data) {

    return await fisioModel.create(data)
  },

  async readFisiote() {

    return await fisioModel.find()
  },

  async getById(id) {

    return await fisioModel.findById(id)
  },

  async getFisioByEspecialidad(especialidd) {

    return await fisioModel.find({especialidad: especialidd})
  }
}