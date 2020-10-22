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
      const newEventRequest = await models.Event.create({
        userId,
        postId,
        eventValidation: false,
        eventIsAdmin: false,
        eventRequest: true,
      });
      if (newEventRequest) {
        res.status(200).json({ event: newEventRequest });
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

          attributes: ["firstName"],
        },
      ],
    });

    if (getUserRequest) {
      res.status(200).json({ UserRequests: getUserRequest });
    }
  },

  getAllEvent: async (req, res) => {
    const Events = await models.Event.findAll({
      where: { eventIsAdmin: false },
    });
    if (Events) return res.status(200).json({ Events });
  },
  editEvent: async (req, res) => {},

  deleteEvent: async (req, res) => {},
  deleteEventRequest: async (req, res) => {},
};
