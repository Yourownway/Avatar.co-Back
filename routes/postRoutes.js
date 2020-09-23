const postCtrl = require("../controllers/postCtrl");
var express = require("express");
var router = express.Router();

router.post("/post", postCtrl.createPost);
router.get("/post", postCtrl.getAllPost);
router.get("/post/:id", postCtrl.getOnePost);
router.patch("/post/:id", postCtrl.editPost);
router.delete("/post/:id", postCtrl.deletePost);

module.exports = router;
