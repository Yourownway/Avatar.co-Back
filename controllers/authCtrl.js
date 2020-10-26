const models = require("../models");
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");

module.exports = {
  // recup la requette

  signUp: async (req, res) => {
    let user = ({
      firstName,
      lastName,
      userEmail,
      userPassword,
      userRole,
      userPirvate,
      userDescription,
    } = req.body);

    for (const property in user) {
      if (user[property] == null || user[property] == "") {
        return res
          .status(400)
          .json({ error: `Le champ ${property} n'est pas renseigné` });
      }
    }

    //check si deja register
    const email = await models.User.findOne({
      attributes: ["userEmail"],
      where: { userEmail: user.userEmail },
    });
    console.log(user.userEmail);
    if (email) {
      return res.status(409).json({ error: `${userEmail} exsiste deja` });
    } else {
      // si il n'exsiste pas on crypte le pass req et on crée un user qu'on envoi dans la res
      bcrypt.hash(user.userPassword, 5, async function (err, hash) {
        user.userPassword = hash;
        const newUser = await models.User.create(user);
        if (newUser) {
          res.status(200).json(newUser);
        } else {
          console.log(err);
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
          return res.status(200).json({
            id: userFound.id,
            firstName: userFound.firstName,
            lastName: userFound.lastName,
            userEmail: userFound.userEmail,
            userBadge: userFound.userBadge,
            userXp: userFound.userXp,
            userDescription: userFound.userDescription,
            userPirvate: userFound.userPrivate,
            Token: jwtUtils.generateTokenForUser(userFound),
          });
        }
      });
    } else {
      res
        .status(404)
        .json({ error: `l\'utilisateur ${userEmail} n\'exsiste pas ` });
    }
  },
};
