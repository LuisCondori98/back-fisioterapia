import { Router } from "express";
import { contactoController } from "../controller/contacto.controller.js";

export const contactoRouter = Router()

contactoRouter.post("/", contactoController.crearContacto)
contactoRouter.get("/", contactoController.leerContactos)