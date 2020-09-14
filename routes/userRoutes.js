var express = require("express");
var router = express.Router();
const security = require("../middleware/checkToken");
const userCtrl = require("../controllers/userCtrl");
const { verifyToken } = require("../middleware/checkToken");

router.get(
  "/profil/:id",
  verifyToken,

  userCtrl.getUserProfil
);
router.patch("/profil/:id/edit", security.verifyToken, userCtrl.editProfil);
router.delete(
  "/profil/:id/delete",
  security.verifyToken,
  userCtrl.deleteProfil
);

module.exports = router;
