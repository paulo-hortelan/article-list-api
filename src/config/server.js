const PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");
const allowCors = require("./cors");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(PORT, function () {
    console.log(`Backend is running on port ${PORT}`);
});

module.exports = server;
