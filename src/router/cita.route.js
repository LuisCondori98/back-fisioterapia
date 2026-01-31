import { Router } from "express";
import { citaController } from "../controller/cita.controller.js";

export const citaRouter = Router()

citaRouter.post("/", citaController.createCita)
citaRouter.get("/", citaController.verCitas)
citaRouter.get("/:id", citaController.getCitaById)