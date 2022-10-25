const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const port = process.env.Port || 5000

app.listen(port, () => {
    console.log("DW server is runninng on port", port)
})
