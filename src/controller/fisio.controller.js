import logger from "../logger.js";
import { fisioService } from "../service/fisio.service.js";
import { usuarioService } from "../service/usuario.service.js";

export const fisioController = {

  async fisioCreate(req, res) {

    try {

      const body = req.body

      const fisio = await fisioService.crearFisio(body)

      logger.info("Fisioterapeuta creado", fisio)

      return res.status(200).json(fisio)

    } catch(e) {

      logger.error("Error", e)
    }
  },

  async readFisios(req, res) {

    try {

      const fisios = await usuarioService.leerUsuarioRol("fisioterapeuta");

      logger.info("Obteniendo todos los fisioterapeutas")

      return res.status(200).json(fisios)
    } catch(e) {

      logger.error("Error", e)
    }
  }
}