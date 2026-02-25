import logger from "../logger.js";
import { fisioService } from "../service/fisio.service.js";
import { usuarioService } from "../service/usuario.service.js";

export const fisioController = {

  async fisioCreate(req, res) {

    try {

      const body = req.body

      const fisio = await fisioService.crearFisio(body)

      logger.info("[FisioController] Fisioterapeuta creado", fisio)

      return res.status(200).json(fisio)

    } catch(e) {

      logger.error("Error", e)
    }
  },

  async readFisios(req, res) {

    try {

      const fisios = await usuarioService.leerUsuarioRol("fisioterapeuta");

      logger.info("[FisioController] GET ALL FISIOTERAPEUTAS")

      return res.status(200).json(fisios)
    } catch(e) {

      logger.error("Error", e)
    }
  },

  async getById(req, res) {

    try {

      const {id} = req.params

      const fisio = await usuarioService.leerUsuarioById(id)

      logger.info(`[FisioController] Find Fisio By Id: ${id} successfully`)

      return res.status(200).json({
        id: fisio._id,
        nombre: fisio.nombre,
        apellidoPaterno: fisio.apellidoPaterno,
        apellidoMaterno: fisio.apellidoMaterno,
        especialidad: fisio.especialidad,
        telefono: fisio.celular,
        email: fisio.correo,
        img: fisio.img,
        colegiatura: fisio.colegiatura,
        universidad: fisio.universidad,
        descProfesional: fisio.descProfesional
      })
    } catch(e) {

      logger.error("Error", e)
    }
  },

  async getByEspecialidad(req, res) {

    try {

      const {espe} = req.params

      const fisioEspe = fisioService.getFisioByEspe(espe)

      logger.info(`[FisioController] find Fisioterapueta by Especiality : ${espe}`)

      return res.status(200).json(fisioEspe)
    } catch(err) {

      logger.error("Error", err)
    }
  }
}