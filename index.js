const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes.js");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const port = 3000;
global.__basedir = __dirname;
// middleware
app.use(helmet());
app.use(cors());
app.use(express.static("assets/uploads/"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
