const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//     res.send("HELLO HELLO from dasboard !!")
// })

app.use("/test", (req, res) => {
    res.send("HELLO from UP")
})

app.use("/work", (req, res) => {
    res.send("HELLO from college")
})

app.use( (req, res) => {
    res.send("HELLO HELLO")
})

app.listen(300, () => {
    console.log("Server is succesfully listening on port 300");
});