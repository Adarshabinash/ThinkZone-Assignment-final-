const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://0.0.0.0/student");
const con = mongoose.connection;

con.on("error", (err) => {
  console.log("The error is--" + err);
});

con.on("open", () => {
  console.log("Connected to the database..");
});
app.use(cors());

app.use(express.json());
const myRouter = require("./routers/myRoutes");
app.use("/", myRouter);

app.listen(port, () => {
  console.log("Listening at port 5000");
});
