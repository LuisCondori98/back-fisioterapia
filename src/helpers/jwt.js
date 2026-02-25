import jwt from "jsonwebtoken"
import logger from "../logger.js"

const Secret_Key = process.env.JSON_KEY || "Secr3t1t0"

export const generateToken = (user) => {

  logger.info("[jwt] Token generate")

  return jwt.sign(
    {
      id:user._id,
      nombre: user.nombre,
      apePaterno: user.apellidoPaterno,
      apeMaterno: user.apellidoMaterno,
      correo: user.correo,
      dni: user.dni,
      rol: user.rol,
      cargo: user.cargo,
      celular: user.celular,
      especialidad: user.especialidad
    },
    Secret_Key,
    {
      expiresIn: "1h"
    }
  )
}

export const verifyToken = (req, res, next) => {

  const header = req.headers["authorization"]

  if(!header) {

    logger.warn("Necesitas token")

    return res.status(403).json({

      error: "Token requerido"
    })
  }

  const token = header.split(" ")[1]

  try {

    const decoded = jwt.verify(token, Secret_Key)

    req.user = decoded

  } catch(err) {

    return res.status(401).json({ error: "Token invalido o expirado"})
  }

  next()
}

export const isAdmin = (req, res, next) => {

  if (req.user.rol !== "admin" && req.user.cargo !== "gerente") {

    logger.warn("[jwt] Required role admin and gerente", req.user)

    return res.status(403).json({ message: "Acceso denegado: se requiere rol administrador" });
  }
  next();
};