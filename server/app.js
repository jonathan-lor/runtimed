const express = require("express");
const app = express();
const { exec } = require("child_process");
const port = process.env.PORT || 6969;
const path = require("path")
const analyze = require("./analyze.js")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("", express.static(path.join(__dirname, "../public")))

app.post("/analyze", async (req, res) => {
    const result = await analyze(req.body.content)

    res.send(result)
})

exec(`lsof -i tcp:${port} | awk '/${port}/{print $2}' | xargs kill`, () => {
    app.listen(port, () => {
        console.log(`Server created on port ${port}.`)
    })
})

exec("rm -r ./server/containers/*")
