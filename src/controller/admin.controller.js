import { adminService } from "../service/admin.service.js";
import { usuarioService } from "../service/usuario.service.js";

export const adminController = {

  async adminCreate(req, res) {

    try {

      const body = req.body

      const adminCreate = await adminService.crearAdmin(body)

      return res.status(200).json(adminCreate)
    } catch(e) {

      console.log(`Error ${e.message}`)
    }
  }
}