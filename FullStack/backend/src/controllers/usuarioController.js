
import db from '../config/db.js'

export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT email, senha FROM usuario WHERE ativo = 1')

        if (rows.length === 0) {
            return res.status(404).json({ message: "Usuario não encontrado." })
        }

        return res.status(200).json({ message: "Usuario encontrado com sucesso.", data: rows })
    } catch (error) {
        return res.status(400).json({ message: "Erro ao buscar Usuario." })
    }
}

export const postUsuarios = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        const [result] = await db.query(
            "INSERT INTO usuario (nome, email, senha, ativo) VALUES (?, ?, ?, 1)",
            [nome, email, senha]
        );

        res.status(201).json({
            id: result.insertId,
            nome,
            email
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao inserir usuário" });
    }
};