import { Router } from "express";
import { usuarioController } from "../controller/usuario.controller.js";
import { isAdmin, verifyToken } from "../helpers/jwt.js";

export const usuarioRouter = Router()

usuarioRouter.post("/", usuarioController.createUsuario)
usuarioRouter.get("/", verifyToken, isAdmin, usuarioController.readUsuarios)
usuarioRouter.get("/find", verifyToken, isAdmin, usuarioController.getByRol)
usuarioRouter.get("/getdni/:dni", usuarioController.getUsuarioByDni)
usuarioRouter.post("/user-update", usuarioController.updUser)
usuarioRouter.post("/pass-recovery", usuarioController.updPass)
usuarioRouter.delete("/delete-user/:id", usuarioController.deleteUser)
usuarioRouter.post("/update-status/:id", usuarioController.updUserStatus)