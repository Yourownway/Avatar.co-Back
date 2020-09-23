var express = require("express");
var router = express.Router();

const auth = require("./authRoutes");
const user = require("./userRoutes");
const post = require("./postRoutes");
const event = require("./eventRoutes");

router.get("/", (req, res) => {
  res.send("hello");
});
router.use(auth);
router.use(user);
router.use(post);
router.use(event);

module.exports = router;
