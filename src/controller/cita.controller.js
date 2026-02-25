import logger from "../logger.js"
import { citaService } from "../service/cita.service.js"
import { sendEmail } from "../service/email.service.js"

export const citaController = {

  async createCita(req, res) {

    const body = req.body

    try {

      const cita = await citaService.createCita(body)

      logger.info("Generated cita")

      await sendEmail("lcondori11@hotmail.com",
                      "Cita Confirmada - Centro de Fisioterapia",
                      `
                      <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px;">
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                          
                          <tr>
                            <td style="background-color: #2c7be5; padding: 20px; text-align: center; color: white;">
                              <h1 style="margin: 0; font-size: 22px;">Centro de Fisioterapia</h1>
                              <p style="margin: 5px 0 0;">Confirmación de Cita</p>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding: 25px;">
                              <p style="font-size: 16px;">Hola <strong>Administrador</strong>,</p>
                              
                              <p style="font-size: 15px; color: #555;">
                                Se ha registrado una nueva cita con los siguientes detalles:
                              </p>

                              <table width="100%" cellpadding="8" cellspacing="0" style="margin-top: 15px; border-collapse: collapse;">
                                <tr>
                                  <td style="background: #f8f9fa; font-weight: bold;">Paciente:</td>
                                  <td>${cita.paciente.nombre} ${cita.paciente.apellidoPaterno} ${cita.paciente.apellidoMaterno}</td>
                                </tr>
                                <tr>
                                  <td style="background: #f8f9fa; font-weight: bold;">Terapeuta:</td>
                                  <td>${cita.terapeuta.nombre} ${cita.terapeuta.apellidoPaterno}</td>
                                </tr>
                                <tr>
                                  <td style="background: #f8f9fa; font-weight: bold;">Fecha:</td>
                                  <td>${new Date(cita.fecha).toLocaleDateString("es-PE", {timeZone: "UTC"})}</td>
                                </tr>
                                <tr>
                                  <td style="background: #f8f9fa; font-weight: bold;">Hora:</td>
                                  <td>${cita.hora}</td>
                                </tr>
                                <tr>
                                  <td style="background: #f8f9fa; font-weight: bold;">Monto:</td>
                                  <td>S/ ${cita.precio}</td>
                                </tr>
                              </table>

                              <p style="margin-top: 20px; font-size: 14px; color: #d9534f;">
                                ⚠️ Falta confirmar el pago.
                              </p>

                              <p style="font-size: 13px; color: #888; margin-top: 30px;">
                                Este es un mensaje automático generado por el sistema.
                              </p>
                            </td>
                          </tr>

                          <tr>
                            <td style="background: #f1f1f1; text-align: center; padding: 15px; font-size: 12px; color: #777;">
                              © 2026 Centro de Fisioterapia - Sistema de Gestión
                            </td>
                          </tr>

                        </table>
                      </div>
                      `
                    );

      return res.status(200).json(cita)
    } catch(err) {

      console.log(body)

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

      logger.info(`find cita for terapeuta id: ${id}`, cita)

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