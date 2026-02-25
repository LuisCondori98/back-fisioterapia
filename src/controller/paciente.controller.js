import logger from "../logger.js";
import { pacienteService } from "../service/paciente.service.js";
import { usuarioService } from "../service/usuario.service.js";

export const pacienteController = {

  async pacienteCreated(req, res) {

    try {

      const body = req.body

      const pacienteCreate = await pacienteService.crearPaciente(body)

      return res.status(200).json(pacienteCreate)
    } catch(e) {

      console.log(`Error ${e.message}`)
    }
  },

  async readPacientes(req, res) {

    try {

      const pacientes = await usuarioService.leerUsuarioRol("paciente")

      logger.info("[PacienteController] find pacientes")

      return res.status(200).json(pacientes)
    } catch(e) {

      console.log(`Error ${e.message}`)
    }
  },

  async updatePaciente(req, res) {

    try {

      const {id} = req.params
      const body = req.body

      const pacienteUpdate = pacienteService.updatePaciente(id, body)

      logger.info(`paciente modificado by Id: ${id}`)
      console.log(body)

      return res.status(200).json(pacienteUpdate)
    } catch(e) {

      console.log(`Error ${e.message}`)
    }
  }
}