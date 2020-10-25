const postCtrl = require("../controllers/postCtrl");
var express = require("express");
var router = express.Router();

router.post("/post", postCtrl.createPost);
router.get("/post", postCtrl.getAllPost);
router.get("/post/search", postCtrl.getSearchPost);
router.get("/post/category/:id", postCtrl.getPostByCategory);
router.get("/post/rate", postCtrl.getPostByRate);
router.get("/post/:id", postCtrl.getOnePost);
router.put("/edit/post/:id", postCtrl.editPost);
router.delete("/delete/post/:id", postCtrl.deletePost);
router.post("/userPost", postCtrl.getUserPost);
router.post("/last/post/user", postCtrl.getLastUserPost);
router.get("/getEvents/post/:id", postCtrl.getEventByPostId);

module.exports = router;
