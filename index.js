const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const cors = require("cors");
const router = require("./routes/routes.js");

// const corsOptions = {
//   origin: "http://localhost:3007",
// };
app.use(cors());
// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
