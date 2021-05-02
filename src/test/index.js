const express = require("express");
const routes = require("../routes/book/book.controller");

const server = express();
server.use(express.json());

server.use("/api", routes);

module.exports = server;
