import { generateToken } from "../helpers/jwt.js";
import logger from "../logger.js";
import { userModel } from "../models/usuarioModel.js";
import { validatePassword } from "../utils/bcrypt.js";

export const authController = {

  async login(req, res) {

    try {
      const body = req.body

      const userFind = await userModel.findOne({correo: body.correo})

      if(!userFind) {

        logger.error("[Login] Usuario no encontrado")

        return res.status(404).json({
          error: "usuario no encontrado"
        })
      }

      if(!validatePassword(body.password, userFind.password)) {

        logger.error("[Login] contraseña incorrecta")

        return res.status(404).json({
          error: "contraseña incorrecta"
        })
      }

      const token = generateToken(userFind)

      return res.status(200).json(token)
    }
    catch (e) {

      console.log({err: e.message})
    }
  }
}