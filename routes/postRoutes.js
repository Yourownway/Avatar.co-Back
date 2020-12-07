const postCtrl = require("../controllers/postCtrl");
const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/checkToken");

router.post("/post", postCtrl.createPost);
router.get("/post/allpost", postCtrl.getAllPost); // Training page , tout les posts
router.patch("/post/:postId/:userId/edit", postCtrl.editPost); //editPost

router.delete("/post/:postId/delete", postCtrl.deletePost); //deletePost

router.get("/post/:postId/postById", postCtrl.getPostbyId); //Profil user mise a jour du get all
router.get("/post/search", postCtrl.getSearchPost);
router.get("/post/:id/category", postCtrl.getPostByCategory); //category id
router.get("/post/rate", postCtrl.getPostByRate);
router.get("/post/:id", postCtrl.getOnePost);
router.post("/userPost", postCtrl.getUserPost);
router.post("/last/post/user", postCtrl.getLastUserPost);
router.get("/getEvents/post/:id", postCtrl.getEventByPostId);
router.get("/post/:userId/getAllPostIdUser", postCtrl.getAllUserEvent); //PageProfil
module.exports = router;
