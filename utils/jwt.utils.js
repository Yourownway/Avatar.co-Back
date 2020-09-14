const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SIGN_SECRET = process.env.TOKEN;
module.exports = {
  generateTokenForUser: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
      },
      JWT_SIGN_SECRET
      //   {
      //     expiresIn: "1h",
      //   }
    );
  },
};
