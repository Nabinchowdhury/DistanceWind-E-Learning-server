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

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const course = courses.find(course => course.categoryId === id)
    res.send(course)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.map(course => course.courses.find(each => each.id === id))
    res.send(selectedCourse)
})
