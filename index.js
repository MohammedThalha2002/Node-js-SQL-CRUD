const express = require("express");
const cors = require("cors");
const router = require("./router/routes.js");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/posts", router);
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  console.log("GET REQ");
  res.send("GETTING REQUEST SUCCESSFULLY");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname + "/static/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening to the PORT : ` + PORT);
});
