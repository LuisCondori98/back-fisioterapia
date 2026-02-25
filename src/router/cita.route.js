import { Router } from "express";
import { citaController } from "../controller/cita.controller.js";

export const citaRouter = Router()

citaRouter.post("/", citaController.createCita)
citaRouter.get("/", citaController.verCitas)
citaRouter.get("/:id", citaController.getCitaByIdTerapeuta)
citaRouter.get("/paciente/:id", citaController.getCitaByIdPaciente)
citaRouter.delete("/delete/:id", citaController.deleteCitaById)
citaRouter.put("/update/:id", citaController.updateCita)