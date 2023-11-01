import { Router } from "express";
import { login, logout, signup, current } from "../controllers/registerController.js"
import { auth } from "../middlewares/auth.js";
const registerRouter= Router()

registerRouter.post("/registro", signup)
registerRouter.post("/login", login)
registerRouter.post("/logout", logout)
registerRouter.get("/current", auth, current)

export default registerRouter