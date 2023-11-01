import { Router } from "express";
import { getAllNews, getOneNews, createNews } from "../controllers/newsController.js";
const newsRouter= Router()

newsRouter.get("/", getAllNews)
newsRouter.get("/:id", getOneNews)
newsRouter.post("/", createNews)

export default newsRouter