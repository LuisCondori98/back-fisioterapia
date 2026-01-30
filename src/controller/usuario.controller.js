import logger from "../logger.js";
import { userModel } from "../models/usuarioModel.js";
import { usuarioService } from "../service/usuario.service.js";

export const usuarioController = {

  async createUsuario(req, res) {

    let body = req.body

    try {

      const userCreate = await usuarioService.crearUsuario(body)

      return res.status(200).json({userCreate})

    } catch(e) {

      console.log(body)

      logger.error(`Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async readUsuarios(req, res) {

    try {

      const users = await usuarioService.leerUsuarios()

      logger.info("Usuarios enviados por peticion")

      return res.status(200).json(users)

    } catch(e) {

      logger.error(`Error => ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async getByRol(req, res) {

    try {

      const {rol} = req.query

      const {name} = req.query

      if(name && name.trim() !== "") {

        const user = await usuarioService.getByNombre(name)

        return res.status(200).json(user)
      }

      if(rol) {

        const user = await usuarioService.leerUsuarioRol(rol)

        return res.status(200).json(user)
      }

      const users = await usuarioService.leerUsuarios()

      return res.status(200).json(users)
    } catch (e) {

      logger.error(`Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async getUsuarioByDni(req, res) {

    try {

      const {dni} = req.params

      const user = await usuarioService.getUserDni(dni)

      logger.info("find usuario por dni")

      return res.status(200).json(user)
    } catch (e) {

      logger.error(`Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async getUsuarioByNombre(req, res) {

    try {

      const {nombre} = req.query
      
      console.log(nombre)

      const user = await usuarioService.getByNombre(nombre)

      return res.status(200).json(user)
    } catch (e) {

      logger.error(`Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async updUser(req, res) {

    try {

      const body = req.body

      const userFind = await userModel.findOne({_id: body.id})

      if(userFind) {

        const userUpdate = await usuarioService.modificarUsuario(body.id, body)

        return res.status(200).json({
          message: "Usuario cambiado",
          userUpdate
        })
      }

      return res.status(404).json({

          error: "usuario no encontrado"
      })
    } catch (e) {

      logger.error(`Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
     }
  },

  async updPass(req, res) {

    try {

      const body = req.body

      const userFind = await userModel.findOne({correo: body.correo})

      if(userFind) {

        const userUpdate = usuarioService.modificarContra(body.correo, body.password)

        return res.status(200).json({
          message: "Contraseña cambiada",
          userUpdate
        })
      }

      return res.status(404).json({

          error: "usuario no encontrado para el pass"
      })

      // const userUpdate = usuarioService.modificarContra(body.correo, body.password)

      // return res.status(200).json({
      //   message: "Contraseña cambiada",
      //   userUpdate
      // })
    } catch (e) {

      logger.error(`Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}