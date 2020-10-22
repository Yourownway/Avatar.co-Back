const jwt = require("jsonwebtoken");

require("dotenv").config();

const JWT_SIGN_SECRET = process.env.TOKEN;

module.exports = {
  verifyToken: (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    const bearerToken = bearerHeader.split(" ")[1];
    if (typeof bearerToken == "undefined" && bearerToken == null) {
      return (res.status(401).jso(req, res, next) = {
        err: "401: utilisateur non authentifié",
      });
    } else {
      jwt.verify(bearerToken, JWT_SIGN_SECRET, (err, user) => {
        if (err) {
          return res
            .status(403)
            .json({ err: "403: accès refusé token invalide" });
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
