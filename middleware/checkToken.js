const jwt = require("jsonwebtoken");

require("dotenv").config();

const STORAGETOKEN = process.env.STORAGETOKEN;
const COOKIETOKEN = process.env.COOKIETOKEN;

module.exports = {
  verifyToken: (req, res, next) => {
    const CookieToken = req.cookies.Cookie_token;
    if (!req.cookies || !CookieToken) {
      return res.status(401).json({ error: "utilisateur non authentifié" });
    }
    jwt.verify(CookieToken, COOKIETOKEN, async (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ err: "403: accès refusé Cookietoken invalide" });
      }
    });
    const bearerHeader = req.headers["authorization"];
    const bearerToken = bearerHeader.split(" ")[1];
    if (typeof bearerToken == "undefined" && bearerToken == null) {
      return (res.status(401).jso(req, res, next) = {
        err: "401: utilisateur non authentifié",
      });
    } else {
      jwt.verify(bearerToken, STORAGETOKEN, (err, user) => {
        if (err) {
          return res
            .status(403)
            .json({ err: "403: accès refusé tokenStorage invalide" });
        } else {
          req.user = user;
          // securisation des route /:id
          if (req.params.id) {
            if (req.user.userId == req.params.id) {
              next();
            } else {
              return res.status(403).json({ err: "403: accès refusé" });
            }
          } else {
            next();
          }
        }
      });
    }
  },
};
