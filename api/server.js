import express from "express";
import receitasRoutes from "./src/routes/receitas.route.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/api/receitas", receitasRoutes);

const server = app.listen(PORT, () => {
    console.log(`Servidor Rodando na Porta ${PORT}`);
    console.log("Servidor está ouvindo:", server.listening);
});

server.on("close", () => {
    console.log("ATENÇÃO: o servidor foi fechado!");
});

server.on("error", (erro) => {
    console.error("Erro no servidor:", erro);
});