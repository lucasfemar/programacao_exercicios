import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

server.use(express.json());

server.post("/user", (request, response) => {
  console.log(request.body);
  response.send();
});

server.listen("3000", () => {
  console.log("Listening on http://localhost:3000");
});
