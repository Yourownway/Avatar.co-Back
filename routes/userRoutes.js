var express = require("express");
var router = express.Router();
const userCtrl = require("../controllers/userCtrl");

const { verifyToken } = require("../middleware/checkToken");

router.get("/checkToken", verifyToken, (req, res) => {
  console.log("ca marche");
  res.send("Token verifié ");
});

router.get(
  "/profil/:id",
  // verifyToken,

  userCtrl.getUserProfil
);
router.patch(
  "/profil/:id/edit-user",
  /*security.verifyToken,*/ userCtrl.editProfil
);
router.delete("/profil/:id/delete", verifyToken, userCtrl.deleteProfil);

module.exports = router;
