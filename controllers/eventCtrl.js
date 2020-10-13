const models = require("../models");

module.exports = {
  eventRequest: async (req, res) => {
    const { userId, postId } = req.body;
    const checkRequest = await models.Event.findOne({
      where: { userId, postId },
    });
    if (checkRequest) {
      res.status(500).json({ err: "La requette a deja été faite" });
    } else {
      const postRequest = await models.Event.create({
        userId,
        postId,
        eventValidation: false,
        eventIsAdmin: false,
      });
      if (postRequest) {
        res.status(200).json({ event: postRequest });
      }
    }
  },
  eventGetValidation: async (req, res) => {
    const { postId } = req.body;
    const getUserRequest = await models.Event.findAll({
      where: {
        eventValidation: false,
        eventIsAdmin: false,
        postId,
      },
      include: [
        {
          model: models.User,

          through: {
            attributes: ["firstName"],
          },
        },
      ],
    });

    if (getUserRequest) {
      res.status(200).json({ UserRequests: getUserRequest });
    }
  },
};
