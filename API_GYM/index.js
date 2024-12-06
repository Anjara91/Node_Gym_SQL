const express = require("express");
require("dotenv").config(); // configuro mi servidor para usar variable de entorno

const router = require("./src/api/routers/api.router");


const server = express();
server.use(express.json());

const PORT = process.env.PORT;

//configuración de las rutas
server.use("/", router);

server.listen(process.env.PORT, ()=>{
    console.log(`server running port http://localhost:${PORT}`);
});

