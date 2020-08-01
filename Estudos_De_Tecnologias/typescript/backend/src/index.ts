import express from "express";
const app = express()
// yarn add @types/express -D
// yarn tsc e a pasta do arquivo
import routes from "./routes";
// yarn add cors para permitir quais urls podem acessar o backend
// yarn add @types/cors -D
import cors from "cors";

app.use(cors())
app.use(routes)


app.listen(3333)
