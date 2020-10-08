const postCtrl = require("../controllers/postCtrl");
var express = require("express");
var router = express.Router();

router.post("/post", postCtrl.createPost);
router.get("/post", postCtrl.getAllPost);
router.get("/post/search", postCtrl.getSearchPost);
router.get("/post/date", postCtrl.getAllPostByDate);
router.get("/post/category/:id", postCtrl.getPostByCategory);
router.get("/post/rate", postCtrl.getPostByRate);
router.get("/post/:id", postCtrl.getOnePost);
router.patch("/post/:id", postCtrl.editPost);
router.delete("/post/:id", postCtrl.deletePost);
router.post("/post/user", postCtrl.getUserPost);
router.post("/last/post/user", postCtrl.getLastUserPost);

module.exports = router;
