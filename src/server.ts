// arquivo principal para as configurações do servidor

import * as http from "http";
import { app } from "./app";

// criando API
const server = http.createServer(app);

const port = process.env.PORTA;

// Definindo a porta da API
server.listen(port, () =>{
    console.log(`Porta ${port} inicializada com sucesso 🫱`);
});
