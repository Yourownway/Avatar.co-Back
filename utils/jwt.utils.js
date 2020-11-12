const models = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const COOKIETOKEN = process.env.COOKIETOKEN;
const STORAGETOKEN = process.env.STORAGETOKEN;
module.exports = {
  generateStorageToken: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
      },
      STORAGETOKEN,
      {
        expiresIn: "1h",
      }
    );
  },
  generateCookieToken: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
      },
      COOKIETOKEN
    );
  },
  loadUser: (req, res) => {
    const CookieToken = req.cookies.Cookie_token;
    if (!req.cookies || !CookieToken) {
      return res.status(401).json({ error: "utilisateur non authentifié" });
    }
    jwt.verify(CookieToken, COOKIETOKEN, async (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ err: "403: accès refusé token invalide" });
      }
    });

    const bearerHeader = req.headers["authorization"];
    const bearerToken = bearerHeader.split(" ")[1];

    if (typeof bearerToken == "undefined" && bearerToken == null) {
      return (res.status(401).jso(req, res, next) = {
        error: "401: utilisateur non authentifié",
      });
    } else {
      jwt.verify(bearerToken, STORAGETOKEN, async (err, user) => {
        if (err) {
          return res
            .status(403)
            .json({ err: "403: accès refusé token invalide" });
        } else {
          console.log("USER", user);
          const userFound = await models.User.findOne({
            where: { id: user.userId },
          });
          if (userFound) {
            return res.status(200).json({
              id: userFound.id,
              firstName: userFound.firstName,
              lastName: userFound.lastName,
              userEmail: userFound.userEmail,
              userBadge: userFound.userBadge,
              userXp: userFound.userXp,
              userDescription: userFound.userDescription,
              userPirvate: userFound.userPrivate,
              userImage: userFound.userImage,
            });
          } else {
            return res.status(500).json({ err: "500 erreur serveur" });
          }
        }
      });
    }
  },
};
