import { adminDao } from "../DAO/adminDao.js";
import { hashedPassword } from "../utils/bcrypt.js";

export const adminService = {

  async crearAdmin(data) {

    data.password = hashedPassword(data.password)

    data.nombre = data.nombre.toUpperCase()
    data.apellidoPaterno = data.apellidoPaterno.toUpperCase()
    data.apellidoMaterno = data.apellidoMaterno.toUpperCase()

    return await adminDao.createAdmin(data)
  }
}