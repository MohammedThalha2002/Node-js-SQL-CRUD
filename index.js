const express = require("express");
const cors = require("cors");
const router = require("./router/routes.js");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/posts", router);

app.get("/", (req, res) => {
  console.log("GET REQ");
  res.send("GETTING REQUEST SUCCESSFULLY");
});

app.listen(PORT, () => {
  console.log(`Listening to the PORT : ` + PORT);
});
