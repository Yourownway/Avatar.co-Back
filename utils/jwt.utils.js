const models = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SIGN_SECRET = process.env.TOKEN;
module.exports = {
  generateTokenForUser: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
        userEmail: userData.email,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: "1h",
      }
    );
  },

  loadUser: (req, res) => {
    const bearerHeader = req.headers["authorization"];
    const bearerToken = bearerHeader.split(" ")[1];
    if (typeof bearerToken == "undefined" && bearerToken == null) {
      return (res.status(401).jso(req, res, next) = {
        err: "401: utilisateur non authentifié",
      });
    } else {
      jwt.verify(bearerToken, JWT_SIGN_SECRET, async (err, user) => {
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
