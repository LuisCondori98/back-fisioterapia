import bcrypt, { genSaltSync } from "bcrypt"

export const hashedPassword = (password) => bcrypt.hashSync(password, genSaltSync(10))

export const validatePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword)