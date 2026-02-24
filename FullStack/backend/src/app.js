import express from 'express'
import usuarioRouter from './routes/usuarioRouter.js';
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.use(usuarioRouter)

export default app;