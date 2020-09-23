const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const router = require("./routes/routes.js");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
