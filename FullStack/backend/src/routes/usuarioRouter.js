import { Router } from "express";

const usuarioRouter = Router()

// Importando controller
import { getUsuarios, postUsuarios } from "../controllers/usuarioController.js";

// Rotas
usuarioRouter.get('/usuario', getUsuarios)
usuarioRouter.post('/usuario', postUsuarios)

export default usuarioRouter;