import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import dogFacts from "./dogfacts.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send("Conectado!");
});

app.get("/all-facts", (req, res) => {
	res.status(200).json(dogFacts);
});

app.listen(process.env.PORT || 9000);
