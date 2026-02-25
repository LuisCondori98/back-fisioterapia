import { Router } from "express";
import { pacienteController } from "../controller/paciente.controller.js";

export const pacienteRouter = Router()

pacienteRouter.post("/", pacienteController.pacienteCreated)
pacienteRouter.get("/", pacienteController.readPacientes)
pacienteRouter.post("/update-paciente/:id", pacienteController.updatePaciente)