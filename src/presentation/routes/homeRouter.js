import { Router } from "express";
import {getTwoNews} from "../controllers/homeController.js"
const homeRouter = Router()

homeRouter.get("/", getTwoNews)

export default homeRouter