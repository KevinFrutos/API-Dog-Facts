import express from "express"
import cors from "cors"
import dogFacts from "./dogfacts.js"

const app = express()

app.use(cors())

app.get("/all-facts", (req, res) => {
    res.status(200).json(dogFacts)
})

app.listen(process.env.PORT || 9000)