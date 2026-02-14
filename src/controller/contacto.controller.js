import logger from "../logger.js"
import { contactoService } from "../service/contacto.service.js"

export const contactoController = {

  async crearContacto(req, res) {

    try {

      const body = req.body

      const contactoMssg = await contactoService.crearContacto(body)

      return res.status(200).json(contactoMssg)
    } catch(err) {

      logger.error("[ContactoController] Create contact error " + err.message )

      console.log(err.message)
    }
  },

  async leerContactos(req, res){

    try {

      const contactoMssgs = await contactoService.leerContacto()

      return res.status(200).json(contactoMssgs)
    } catch(err) {

      logger.error("[ContactoController] Read contacts error " + err.message )

      console.log(err.message)
    }
  }
}