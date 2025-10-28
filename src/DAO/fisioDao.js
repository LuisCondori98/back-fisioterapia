import { fisioModel } from "../models/fisioModel.js";

export const fisioDao = {

  async createFisio(data) {

    return await fisioModel.create(data)
  },

  async readFisiote() {

    return await fisioModel.find()
  }
}