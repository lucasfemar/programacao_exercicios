import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json()); // Dizer para o servidor que vamos trabalhar com dados em JSOn

server.post("/user", (request, response) => {
  // Disponibilzia a rota /user com o metodo POST
  console.log(request.body);
  response.send();
});

server.listen("3000", () => {
  // Servir o backend na porta 3000
  console.log("Listening on http://localhost:3000");
});
