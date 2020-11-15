const models = require("../models");
const fs = require("fs");
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
          "userXp",
          "userBadge",
          "userDescription",
          "userImage",
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
          "userDescription",
        ],
        where: { id: userId },
      });

      if (updateProfil) {
        const newProfil = await models.User.findOne({
          where: { id: userId },
          attributes: [
            "id",
            "firstName",
            "lastName",
            "userEmail",
            "userDescription",
            "userXp",
          ],
        });
        if (newProfil) {
          res.status(200).json(newProfil);
        }
      }
    });
  },
  editProfilImg: async (req, res) => {
    const userId = req.params.id;

    const userImage = req.file.filename;
    console.log(userImage);
    try {
      if (req.file == undefined) {
        return res
          .status(400)
          .json({ err: "vous devez selectionner un fichier" });
      }

      const imageUpdate = await models.User.update(
        { userImage },
        {
          where: { id: userId },
        }
      );
      if (imageUpdate) {
        const newProfil = await models.User.findOne({
          where: { id: userId },
          attributes: [
            "id",
            "firstName",
            "lastName",
            "userEmail",
            "userDescription",
            "userXp",
            "userImage",
          ],
        });
        if (newProfil) {
          res.status(200).json(newProfil);
        }
      }
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ err: `Erreur pendant le chargement de l'image: ${error}` });
    }
  },
  deleteProfil: async (req, res) => {
    const userId = req.params.id;
    const deleted = await models.User.destroy({
      where: { id: userId },
    });
    if (deleted) {
      return res.status(200).json({ succes: `Profil deleted` });
    } else {
      return res.status(404).json({ err: "profil deja supprimé" });
    }
  },
};
