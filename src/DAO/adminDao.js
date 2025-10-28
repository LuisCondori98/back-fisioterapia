import { adminModel } from "../models/adminModel.js"

export const adminDao = {

  async createAdmin(data) {

    return await adminModel.create(data)
  }
}