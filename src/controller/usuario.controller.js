import logger from "../logger.js";
import { userModel } from "../models/usuarioModel.js";
import { usuarioService } from "../service/usuario.service.js";

export const usuarioController = {

  async createUsuario(req, res) {

    let body = req.body

    try {

      const userCreate = await usuarioService.crearUsuario(body)

      logger.info(`[UserController] Create user Successfully`)

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

      logger.info("[UserController] Get all users")

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

        const user = await usuarioService.getByNombre(name.toUpperCase())

        logger.info(`[UserController] User find by name ${name.trim()}`)

        return res.status(200).json(user)
      }

      if(rol) {

        const user = await usuarioService.leerUsuarioRol(rol)

        logger.info(`[UserController] User find by rol ${rol}`)

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

      logger.info(`[UserController] find usuario by dni ${dni}`)

      return res.status(200).json(user)
    } catch (e) {

      logger.error(`[UserController] Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async getUsuarioByNombre(req, res) {

    try {

      const {nombre} = req.query

      const user = await usuarioService.getByNombre(nombre)

      logger.info(`[UserController] USER FIND BY NOMBRE ${nombre}`)

      return res.status(200).json(user)
    } catch (e) {

      logger.error(`[UserController] Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async updUser(req, res) {

    try {

      const body = req.body

      const userFind = await usuarioService.leerUsuarioById(body.id)

      if (body.nombre) body.nombre = body.nombre.toUpperCase();
      if (body.apellidoPaterno) body.apellidoPaterno = body.apellidoPaterno.toUpperCase();
      if (body.apellidoMaterno) body.apellidoMaterno = body.apellidoMaterno.toUpperCase();

      if(userFind) {

        const userUpdate = await usuarioService.modificarUsuario(body.id, body)

        logger.info("[UserController] USER UPDATED SUCCESSFULLY")

        return res.status(200).json({
          message: "Usuario cambiado",
          userUpdate
        })
      }

      logger.info("[UserController] USER Not Found")

      return res.status(404).json({

          error: "usuario no encontrado"
      })
    } catch (e) {

      logger.error(`[UserController] Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
     }
  },

  async updPass(req, res) {

    try {

      const body = req.body

      const userFind = await userModel.findOne({correo: body.correo})

      if(userFind) {

        const userUpdate = usuarioService.modificarContra(body.correo, body.password)

        logger.info("[UserController] Password updated successfully")

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

      logger.error(`[UserController] Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async deleteUser(req, res) {

    try {

      const {id} = req.params

      const userDelete = usuarioService.deleteUserById(id)

      logger.info(`[UserController] Delete user by id : ${id}`)

      return res.status(200).json(userDelete)

    } catch (e) {

      logger.error(`[UserController] Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async updUserStatus(req, res) {

    try {

      const {id} = req.params

      const body = req.body

      await usuarioService.updateUserStatus(id, body)

      logger.info(`[UserController] User update status by id: ${id} to status ${body.estado}`)

      return res.status(200).json("status update")

    } catch (e) {

      logger.error(`[UserController] Error ${e.message}`)

      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}