const express = require("express");

const app = express();

//app.use("/route", rH, [rH2, rH3], rH4, rh5);

app.get("/user", (req, res, next) => {
    console.log("middleware");
    next();
  })

app.get("/user", 
  (req, res, next) => {
    console.log("middleware !");
    next();
  },
  (req, res, next) => {
    console.log("middleware !!");
    next();
  },
  (req, res, next) => {
    res.send("route handler 1");
  },
  (req, res, next) => {
    res.send("route handler 2");
  }
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

