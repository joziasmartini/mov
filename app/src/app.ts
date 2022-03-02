// ENV Variables
require("dotenv").config();

import express from "express"
import config from "config"

const app = express()

// JSON Middleware
app.use(express.json())

// Database
import db from "../config/db"

// Logger
import Logger from "../config/logger"

// Middlewares
import morganMiddleware from "./middlewares/morganMiddleware";

app.use(morganMiddleware)

// Routes
import router from "./router"

app.use("/api/", router)


// App Port
const port = config.get<number>("port")

app.listen(3000, async() => {
    await db();

    Logger.info(`Aplicação está funcionando na porta ${port}.`)
})