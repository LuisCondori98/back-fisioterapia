import { Router } from "express";
import { contactoController } from "../controller/contacto.controller.js";
import { isAdmin } from "../helpers/jwt.js";
import { verifyToken } from "../helpers/jwt.js";

export const contactoRouter = Router()

contactoRouter.post("/", contactoController.crearContacto)
contactoRouter.get("/", verifyToken, isAdmin, contactoController.leerContactos)