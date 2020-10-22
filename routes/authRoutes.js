const authCtrl = require("../controllers/authCtrl");
const jwt = require("../utils/jwt.utils");
var express = require("express");

var router = express.Router();

router.post("/signUp", authCtrl.signUp);
router.post("/signIn", authCtrl.signIn);
router.get("/load/user", jwt.loadUser);

module.exports = router;
