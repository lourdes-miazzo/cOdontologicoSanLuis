import dotenv from "dotenv"
dotenv.config()
import app from "./app.js";
import { connectDB } from "./db.js";
import registerRouter from "./presentation/routes/registerRoute.js";
import contactRoute from "./presentation/routes/contactRoute.js"
import newsRouter from "./presentation/routes/newsRouter.js";
import homeRouter from "./presentation/routes/homeRouter.js";

connectDB()
app.use("/api/register", registerRouter)
app.use("/api/contacto", contactRoute)
app.use("/api/noticias", newsRouter)
app.use("/api", homeRouter)

app.listen(process.env.NODE_PORT, ()=>{
    console.log(`Listening on port ${process.env.NODE_PORT}`)
}) 