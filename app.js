const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dogFacts = require("./dogfacts.js");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send("Conectado!");
});

app.get("/all-facts", (req, res) => {
	res.status(200).json(dogFacts);
});

app.listen(process.env.PORT, () => {
    console.log('Accede al servidor desde el puerto ' + process.env.PORT)
  })