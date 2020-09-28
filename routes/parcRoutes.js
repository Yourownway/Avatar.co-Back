const parcCtrl = require("../controllers/parcCtrl");
var express = require("express");
var router = express.Router();

router = router.get("/parc/:id", parcCtrl.getParcById);

module.exports = router;
