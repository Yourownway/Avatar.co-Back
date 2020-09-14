const authCtrl = require("../controllers/authCtrl");
var express = require("express");
var router = express.Router();

router.post("/signUp", authCtrl.signUp);
router.post("/signIn", authCtrl.signIn);

module.exports = router;
