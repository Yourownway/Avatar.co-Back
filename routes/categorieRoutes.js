const categorieCtrl = require("../controllers/categorieCtrl");
const express = require("express");
const router = express.Router();

router.get("/categories", categorieCtrl.getAllCategorie);
router.get("/categorie", categorieCtrl.getPostByCategorie);

module.exports = router;
