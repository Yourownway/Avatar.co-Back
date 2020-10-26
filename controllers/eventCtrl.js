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

  deleteEvent: async (req, res) => {
    const eventId = req.params.id;
    const deleted = await models.Event.destroy({
      where: { id: eventId },
    });
    if (deleted) {
      return res.status(200).json({ succes: `Event supprimé` });
    } else {
      return res.status(404).json({ err: "Event deja supprimé" });
    }
  },

  getUserEvent: async (req, res) => {
    const { userId } = req.body;
    const userEvent = await models.Event.findAll({
      where: { userId },
    });
    if (userEvent) {
      console.log("=============================");
      res.status(200).json({ userEvent });
    }
  },
  getEventByPostId: async (req, res) => {
    const postId = req.params.id;
    const Post = await models.Event.findAll({
      raw: true,
      where: { postId },
      attributes: [
        "id",
        "eventValidation",
        "eventIsAdmin",
        "eventRequest",
        "eventComment",
        "postId",
        "userId",
      ],
      include: [
        {
          model: models.User,
          attributes: ["firstName", "id"],
        },
        { model: models.Post },
      ],
    });
    res.status(200).json({ Post });
  },

  eventValidate: async (req, res) => {
    const eventId = req.params.id;
    const updateData = { eventValidation: true, eventRequest: false };
    const validateUser = await models.Event.update(updateData, {
      where: { id: eventId },
    });
    if (validateUser) {
      const getStatus = await models.Event.findOne({
        where: { id: eventId },
      });
      res.status(200).json({ getStatus });
    } else res.status(400).json({ err: "une erreur c'est produite" });
  },

  eventDecline: async (req, res) => {
    const eventId = req.params.id;

    const update = { eventRequest: false };
    const declineUser = await models.Event.update(update, {
      where: { id: eventId },
    });
    if (declineUser) {
      const getStatus = await models.Event.findOne({
        where: { id: eventId },
      });
      res.status(200).json(getStatus);
    } else res.status(400).json({ err: "une erreur c'est produite" });
  },
};
