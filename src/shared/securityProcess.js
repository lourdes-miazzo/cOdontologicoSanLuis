import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { token } from "morgan"
dotenv.config()

export const hash= (pass)=>{
    return bcrypt.hash(pass, 10)

}

export const decrypt = (pass1, pass2)=>{
    return bcrypt.compare(pass1, pass2)
}

export const creatTok= (newUser)=>{
    return jwt.sign({user: newUser},process.env.SECRET_KEY, {expiresIn: "1h"})
}

