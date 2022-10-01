const express = require("express")
const app = express()
const port = 6969

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/.`)
})
