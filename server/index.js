import express from "express"
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import cors from "cors"
import bodyParser from "body-parser";
import  http from'http'
import { Server } from 'socket.io';

const app = express();
const server = http.Server(app);
import socket from  "../socket/index.js";
socket(server,Server)
//database ni file databse connect krva mate function banayvu che e che
Connection();
//defining port
app.use(cors())
app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "https://whatsapp-sv52.onrender.com");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Route)
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
})
