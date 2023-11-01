import { Router } from "express";
import { contactMail } from "../controllers/contactController.js";

const contactRoute= Router()

contactRoute.post("/", contactMail)

export default contactRoute