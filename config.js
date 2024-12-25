const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());

module.exports = {
    express,
    bodyParser,
    jwt,
    Router: express.Router(),
    jwtSecret: "SID",
    port: 3000,
    app
}

