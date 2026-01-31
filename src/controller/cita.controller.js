import logger from "../logger.js"
import { citaService } from "../service/cita.service.js"

export const citaController = {

  async createCita(req, res) {

    try {

      const body = req.body

      console.log(body)

      const cita = await citaService.createCita(body)

      return res.status(200).json(cita)
    } catch(err) {

      logger.error("Error", err)

      return res.status(404).json(err.message)
    }
  },

  async verCitas(req, res) {

    try {

      const citas = await citaService.leerCitas()        

      res.status(200).json(citas);
    } catch (error) {

      logger.error("Error", err)

      res.status(500).json({ error: "Error al obtener citas" });
    }
  },

  async getCitaByIdTerapeuta(req, res) {

    try {

      const {id} = req.params

      const cita = await citaService.getCitaIdFisio(id)

      return res.status(200).json(cita)
    } catch(e) {

      logger.error("Error", err)

      res.status(500).json({ error: "Error al obtener citas" });
    }
  }, 

  async getCitaByIdPaciente(req, res) {

    try {

      const {id} = req.params

      const cita = await citaService.getCitaIdPacien(id)

      return res.status(200).json(cita)
    } catch(e) {

      logger.error("Error", err)

      res.status(500).json({ error: "Error al obtener citas" });
    }
  }
}