import express from "express"
import cors from "cors"
import morgan from "morgan"
import logger from "./logger.js"
import { usuarioRouter } from "./router/usuario.route.js"
import { adminRouter } from "./router/admin.route.js"
import { pacienteRouter } from "./router/paciente.route.js"
import { fisioteRouter } from "./router/fisio.route.js"
import { authRouter } from "./router/auth.route.js"
import { contactoRouter } from "./router/contacto.route.js"
import passport from "passport"
import "./config/passport.js"
import session from "express-session"
import { citaRouter } from "./router/cita.route.js"

export const app = express()

app.use(
  morgan("tiny", {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.use(session({ secret: "tuSecreto", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", usuarioRouter)
app.use("/api/admin", adminRouter)
app.use("/api/fisioterapeuta", fisioteRouter)
app.use("/api/paciente", pacienteRouter)
app.use("/auth", authRouter)
app.use("/api/contacto", contactoRouter)
app.use("/api/cita", citaRouter)

app.get("/", (req, res) => {

  logger.info("Run server Welcome")

  return res.json({
    status: "success",
    date: new Date().toLocaleString()
  })
})