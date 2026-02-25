import { Router } from "express";
import { adminController } from "../controller/admin.controller.js";

export const adminRouter = Router()

adminRouter.post("/", adminController.adminCreate)