var express = require("express");
var router = express.Router();

const auth = require("./authRoutes");
const user = require("./userRoutes");

router.get("/", (req, res) => {
  res.send("hello");
});
router.use(auth);
router.use(user);

module.exports = router;
