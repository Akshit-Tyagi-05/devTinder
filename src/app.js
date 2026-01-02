const express = require("express");

const app = express();

// app.use("/user", (req, res) => {     // on typin this will run /user/.... (anything) eg /user/Akscc
//     res.send("HAHAHAHAHA")           // but on work on         /user.... (anything) abcoz ab string hi change hogi na eg /userAKS
// })

app.get("/user", (req, res) => {
    res.send({firstName : "Akshit", secondName : "Tyagi"})
})

app.post("/user", (req, res) => {
    res.send("Data successfully saved to database")
})

app.delete("/user", (req, res) => {
    res.send("Delete successfully")
})

// app.use("/test/2", (req, res) => {
//     res.send("HELLO from UP 2")
// })

app.use("/test", (req, res) => {             // knows as routes
    res.send("HELLO from UP 1")
})

// app.use("/work", (req, res) => {
//     res.send("HELLO from college")
// })

// app.use( (req, res) => {                            
//     res.send("HELLO HELLO u are on dasboard")
// })

app.listen(7777, () => {
    console.log("Server is succesfully listening on port 300");
});



