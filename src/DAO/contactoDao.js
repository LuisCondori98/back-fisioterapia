import { contactoModel } from "../models/contactoModel.js"

export const contactoDao = {

  async createContacto(data) {

    return await contactoModel.create(data);
  },

  async readContactos() {

    return await contactoModel.find()
  }
}