const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const path = require("path")
const analyze = require("./analyze.js")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("", express.static(path.join(__dirname, "../public")))

app.post("/analyze", async (req, res) => {
    const result = await analyze(req.body.content, "")

    res.send(result)
})

app.listen(port, () => {
    console.log(`Server created on http://localhost:${port}/.`)
})
