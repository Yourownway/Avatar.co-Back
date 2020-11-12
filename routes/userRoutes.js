const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");

const upload = require("../middleware/upload");

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
  verifyToken,

  userCtrl.editProfil
);
router.patch(
  "/profil/:id/edit-image",
  upload.single("file"),
  userCtrl.editProfilImg
);
router.delete("/profil/:id/delete", verifyToken, userCtrl.deleteProfil);

module.exports = router;
