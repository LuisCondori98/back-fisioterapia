import { Router } from "express";
import { fisioController } from "../controller/fisio.controller.js";

export const fisioteRouter = Router()

fisioteRouter.post("/", fisioController.fisioCreate)
fisioteRouter.get("/", fisioController.readFisios)
fisioteRouter.get("/:id", fisioController.getById)
fisioteRouter.get("/especialidad/:espe", fisioController.getByEspecialidad)