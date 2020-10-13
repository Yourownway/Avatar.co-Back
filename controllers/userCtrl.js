const models = require("../models");
const ls = require("local-storage");
const bcrypt = require("bcrypt");

module.exports = {
  getUserProfil: async (req, res) => {
    const userId = req.params.id;

    if (userId) {
      const dataUser = await models.User.findOne({
        attributes: [
          "id",
          "firstName",
          "lastName",
          "userEmail",
          "userRole",
          "userPirvate",
          "userDescription",
        ],
        where: { id: userId },
      });
      if (dataUser) {
        return res.status(200).json({ user: dataUser });
      } else {
        return res.status(500).json({ err: "500 erreur serveur" });
      }
    } else {
      return res.status(401).json({ err: "401: utilisateur non authentifié" });
    }
  },

  editProfil: async (req, res) => {
    const userId = req.params.id;

    bcrypt.hash(req.body.userPassword, 5, async function (err, hash) {
      req.body.userPassword = hash;
      const updateProfil = await models.User.update(req.body, {
        attributes: [
          "id",
          "firstName",
          "lastName",
          "userEmail",
          "userRole",
          "userPirvate",
          "userDescription",
        ],
        where: { id: userId },
      });

      ls.set("firstName", updateProfil.firstName);
      console.log("localstorage", ls);
      return res
        .status(200)
        .json({ proflil: `profil de ${req.body.firstName} modifié` });
    });
  },
  deleteProfil: async (req, res) => {
    const userId = req.params.id;
    const deleted = await models.User.destroy({
      where: { id: userId },
    });
    if (deleted) {
      ls.clear();
      return res.status(200).json({ succes: `Profil deleted` });
    } else {
      return res.status(404).json({ err: "profil deja supprimé" });
    }
  },
};
