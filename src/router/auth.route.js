import { Router } from "express";
import { authController } from "../controller/auth.controller.js";
import passport from "passport";

export const authRouter = Router()

authRouter.post("/login", authController.login)
authRouter.get("/facebook", passport.authenticate("facebook", {scope: ["email"]}))
authRouter.get("/facebook/callback", passport.authenticate("facebook", {
                                                          failureRedirect: "/login",
                                                          successRedirect: "/profile"
                                                        }))
authRouter.post("/login-social", authController.loginGoogle)