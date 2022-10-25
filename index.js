const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const port = process.env.Port || 5000

app.listen(port, () => {
    console.log("DW server is runninng on port", port)
})

app.get('/', (req, res) => {
    res.send("E-learning Sever is running")
})

const courses = require("./courses.json")
app.get('/courses', (req, res) => {
    res.send(courses)
})
