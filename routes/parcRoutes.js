const parcCtrl = require("../controllers/parcCtrl");
var express = require("express");
var router = express.Router();

router = router.get("/parcs", parcCtrl.getAllParc);

module.exports = router;
