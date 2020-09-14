const postCtrl = require("../controllers/postCtrl");
var express = require("express");
var router = express.Router();

router.get("/post", postCtrl.getAllPost);
router.get("/post/:id", postCtrl.getOnePost);
router.patch("/post/:id", ,postCtrl.getOnePost);
router.delete("/post/:id", ,postCtrl.getOnePost);
