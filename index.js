const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const cors = require("cors");
const router = require("./routes/routes.js");
const multer = require("multer");
global.__basedir = __dirname;
// const corsOptions = {
//   origin: "http://localhost:3007",
// };
// const storage = multer.diskStorage({destination})
app.use(cors());
// middleware
app.use(express.static("assets/uploads/"));
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
