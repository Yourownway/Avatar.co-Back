const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const cors = require("cors");
const router = require("./routes/routes.js");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
global.__basedir = __dirname;
// middleware
app.use(helmet());
app.use(cors());
app.use(express.static("assets/uploads/"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);

// app.post("/profile", upload.single("avatar"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
