import logger from "../logger.js"
import { citaService } from "../service/cita.service.js"
import { sendEmail } from "../service/email.service.js"

export const citaController = {

  async createCita(req, res) {

    try {

      const body = req.body

      console.log(body)

      const cita = await citaService.createCita(body)

      logger.info("Generated cita")

      await sendEmail("lcondori11@hotmail.com",
                "cita confirmada",
                `<h2>Hola Admin el paciente ${body.paciente} tiene cita con el terapeuta ${body.terapeuta} el ${body.fecha} a las ${body.hora} falta confirmar pago </h2>`)

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

      logger.error("Error", e)

      res.status(500).json({ error: "Error al obtener citas" });
    }
  }, 

  async getCitaByIdPaciente(req, res) {

    try {

      const {id} = req.params

      const cita = await citaService.getCitaIdPacien(id)

      //logger.info("find by id paciente")

      return res.status(200).json(cita)
    } catch(e) {

      logger.error("Error", e)

      res.status(500).json({ error: "Error al obtener citas" });
    }
  },

  async updateCita(req, res) {

    try {

      const {id} = req.params
      const body = req.body
      console.log(body)

      const updateCita = await citaService.updateCitaId(id, body)

      logger.info("Cita actualizada a confirmada")

      return res.status(200).json({mssg: "Actualizado correctamente", data: updateCita})
    } catch(e) {

      logger.error("Error", e)

      res.status(500).json({ error: "Error al actualizar la cita" });
    }
  },

  async deleteCitaById(req, res) {

    try {

      const {id} = req.params

      const citaDelete = await citaService.deleteCita(id)

      logger.info("cita borrada por id de paciente")

      return res.status(200).json({messg: "cita eliminada por id de paciente", cita: citaDelete})
    } catch(err) {

      logger.error("Error", err)

      res.status(500).json({ error: "Error al borrar cita por id de paciente" });
    }
  }
}