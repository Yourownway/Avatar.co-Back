const models = require("../models");
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
const FIRSTNAME_REGEX = /^[a-zA-Z]{1,}$/;
module.exports = {
  signUp: async (req, res) => {
    let user = ({ firstName, lastName, userEmail, userPassword } = req.body);

    for (const property in user) {
      console.log(user);
      if (
        !user[property] ||
        user[property] == null ||
        user[property] == " " ||
        user[property] == undefined
      ) {
        return res
          .status(400)
          .json({ error: `Le champ ${property} n'est pas renseigné` });
      }
    }
    if (!FIRSTNAME_REGEX.test(user.firstName)) {
      return res
        .status(400)
        .json({ error: "Le prénom doit être une chaîne de caractère." });
    }
    if (!EMAIL_REGEX.test(user.userEmail)) {
      return res.status(400).json({ error: "L'email n'est pas valide." });
    }
    if (!PASSWORD_REGEX.test(user.userPassword)) {
      return res.status(400).json({
        error:
          "Mot de passe invalide (doit avoir une longueur de 4 à 8 caractère et inclure au moins 1 chiffre).",
      });
    }

    const email = await models.User.findOne({
      attributes: ["userEmail"],
      where: { userEmail: user.userEmail },
    });

    if (email) {
      return res.status(409).json({ error: `${userEmail} exsiste deja` });
    } else {
      bcrypt.hash(user.userPassword, 5, async function (err, hash) {
        user.userPassword = hash;
        const addUser = await models.User.create(user);
        if (addUser) {
          res
            .status(200)
            .json({ success: `Bienvenue à toi ${addUser.firstName}` });
        } else {
          return res
            .status(500)
            .json({ error: "ajout de l'utilisateur impossible" });
        }
      });
    }
  },
  signIn: async (req, res) => {
    let user = ({ userEmail, userPassword } = req.body);
    for (const property in user) {
      if (user[property] == null || user[property] == "") {
        return res
          .status(400)
          .json({ error: `Le champ ${property} n'est pas renseigné` });
      }
    }
    const userFound = await models.User.findOne({
      where: { userEmail: user.userEmail },
    });
    if (userFound) {
      bcrypt.compare(user.userPassword, userFound.userPassword, function (
        err,
        result
      ) {
        if (result) {
          const CookieToken = jwtUtils.generateCookieToken(userFound);
          if (CookieToken) {
            res.cookie("Cookie_token", CookieToken, {
              httpOnly: true,
              // secure: true,
              expires: new Date(Date.now() + 8 * 3600000),
            });

            res.status(200).json({
              id: userFound.id,
              firstName: userFound.firstName,
              lastName: userFound.lastName,
              userEmail: userFound.userEmail,
              userBadge: userFound.userBadge,
              userXp: userFound.userXp,
              userDescription: userFound.userDescription,
              userPirvate: userFound.userPrivate,
              userImage: userFound.userImage,
              Token: jwtUtils.generateStorageToken(userFound),
            });
          }
        }
      });
    } else {
      res
        .status(404)
        .json({ error: `l\'utilisateur ${userEmail} n\'exsiste pas ` });
    }
  },
};
