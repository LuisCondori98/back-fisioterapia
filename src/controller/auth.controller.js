import { generateToken } from "../helpers/jwt.js";
import logger from "../logger.js";
import { userModel } from "../models/usuarioModel.js";
import { validatePassword } from "../utils/bcrypt.js";
import admin from "../config/firebaseAdmin.js"
import jwt from "jsonwebtoken"

export const authController = {

  async login(req, res) {

    try {
      const body = req.body

      const userFind = await userModel.findOne({correo: body.correo})

      if(!userFind) {

        logger.error("[LoginController] USER NOT FOUND")

        return res.status(404).json({
          error: "USER NOT FOUND"
        })
      }

      if(!validatePassword(body.password, userFind.password)) {

        logger.error("[LoginController] PASSWORD INCORRECT")

        return res.status(404).json({
          error: "PASSWORD INCORRECT"
        })
      }

      const token = generateToken(userFind)

      return res.status(200).json(token)
    }
    catch (e) {

      console.log({err: e.message})
    }
  },
  
  async loginGoogle(req, res) {

    const { idToken } = req.body;

    try {

      const decodedToken = await admin.auth().verifyIdToken(idToken);

      const { uid, email, displayName, photoURL } = decodedToken;

      let user = await userModel.findOne({ firebaseUID: uid });

      if (!user) {

        user = await userModel.create({ firebaseUID: uid, email, name: displayName, photo: photoURL, password: "as8CA5s8", dni: "77777777" });
      }

      // Generar tu JWT
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      console.log(token)

      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Token inválido' });
    }
  }
}