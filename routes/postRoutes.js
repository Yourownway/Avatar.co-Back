const postCtrl = require("../controllers/postCtrl");
var express = require("express");
var router = express.Router();

router.post("/post", postCtrl.createPost);
router.get("/post/allpost", postCtrl.getAllPost); // Training page , tout les posts
router.get("/post/:postId/postById", postCtrl.getPostbyId); //Profil user mise a jour du get all
router.get("/post/search", postCtrl.getSearchPost);
router.get("/post/category/:id", postCtrl.getPostByCategory);
router.get("/post/rate", postCtrl.getPostByRate);
router.get("/post/:id", postCtrl.getOnePost);
router.patch("/post/:postId/:userId/edit", postCtrl.editPost); //editPost
router.delete("/post/:postId/delete", postCtrl.deletePost); //deletePost
router.post("/userPost", postCtrl.getUserPost);
router.post("/last/post/user", postCtrl.getLastUserPost);
router.get("/getEvents/post/:id", postCtrl.getEventByPostId);
router.get("/post/:userId/getAllPostIdUser", postCtrl.getAllUserEvent); //PageProfil
module.exports = router;
