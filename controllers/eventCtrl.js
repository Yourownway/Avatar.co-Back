const models = require("../models");

module.exports = {
  createEvent: async (req, res) => {
    const { eventComment } = req.body;
    const { userId, postId } = req.params;
    const checkPost = await models.Event.findOne({
      where: { userId, postId },
    });
    if (checkPost) {
      res.status(400).json({ err: "vous avez deja envoyé un post" });
    } else {
      const newEvent = await models.Event.create({
        postId,
        userId,
        eventIsAdmin: false,
        eventValidation: false,
        eventRequest: true,
        eventComment,
      });
      if (newEvent) {
        res.status(200).json(newEvent);
      } else {
        res.sataus(500).json({ err: "une erreur c'est produite" });
      }
    }
  },

  eventRequest: async (req, res) => {
    const { userId, postId } = req.body;
    const checkRequest = await models.Event.findOne({
      where: {
        userId,
        postId,
        eventRequest: true,
        eventValidation: false || userId,
        postId,
        eventRequest: false,
        eventValidation: true,
      },
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
        const returnEventsUser = await models.Post.findAll({
          order: [["postDate", "DESC"]],

          attributes: [
            "id",
            "postName",
            "postUserRole",
            "postDescription",
            "postDate",
            "postMaxGuest",
          ],
          include: [
            {
              model: models.Parc,
              attributes: ["parcName", "id"],
            },
            {
              model: models.category,
              attributes: ["categoryName", "id"],
            },
            {
              model: models.User,
              attributes: ["firstName", "lastName", "userEmail", "id"],
            },
            {
              model: models.Event,
              attributes: [
                "id",
                "eventValidation",
                "eventIsAdmin",
                "eventRequest",
                "eventComment",
                "postId",
                "userId",
              ],
              where: { userId },
            },
          ],
        });
        if (returnEventsUser) {
          res.status(200).json(returnEventsUser);
        }
      }
    }
  },
  eventGetValidation: async (req, res) => {
    const { postId } = req.body;
    const getUserRequest = await models.Event.findAll({
      where: {
        eventValidation: true,
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
      include: [{ model: models.Post }, { model: models.User }],
    });
    if (Events) return res.status(200).json(Events);
  },
  editEvent: async (req, res) => {},

  deleteEvent: async (req, res) => {
    const postId = req.params.postId;
    const userId = req.params.userId;
    const deleted = await models.Event.destroy({
      where: { postId, userId },
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
      res.status(200).json(userEvent);
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
          attributes: ["firstName", "id", "userXp"],
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
    if (newEventRequest) {
      const returnEventsUser = await models.Post.findAll({
        order: [["postDate", "DESC"]],

        attributes: [
          "id",
          "postName",
          "postUserRole",
          "postDescription",
          "postDate",
          "postMaxGuest",
        ],
        include: [
          {
            model: models.Parc,
            attributes: ["parcName", "id"],
          },
          {
            model: models.category,
            attributes: ["categoryName", "id"],
          },
          {
            model: models.User,
            attributes: ["firstName", "lastName", "userEmail", "id"],
          },
          {
            model: models.Event,
            attributes: [
              "id",
              "eventValidation",
              "eventIsAdmin",
              "eventRequest",
              "eventComment",
              "postId",
              "userId",
            ],
            where: { userId },
          },
        ],
      });
      if (returnEventsUser) {
        res.status(200).json(returnEventsUser);
      }
    } else res.status(400).json({ err: "une erreur c'est produite" });
  },

  eventDecline: async (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.params.userId;

    const update = { eventRequest: false };
    const declineUser = await models.Event.update(update, {
      where: { id: eventId },
    });
    if (declineUser) {
      const returnEventsUser = await models.Post.findAll({
        order: [["postDate", "DESC"]],

        attributes: [
          "id",
          "postName",
          "postUserRole",
          "postDescription",
          "postDate",
          "postMaxGuest",
        ],
        include: [
          {
            model: models.Parc,
            attributes: ["parcName", "id"],
          },
          {
            model: models.category,
            attributes: ["categoryName", "id"],
          },
          {
            model: models.User,
            attributes: ["firstName", "lastName", "userEmail", "id"],
          },
          {
            model: models.Event,
            attributes: [
              "id",
              "eventValidation",
              "eventIsAdmin",
              "eventRequest",
              "eventComment",
              "postId",
              "userId",
            ],
            where: { userId },
          },
        ],
      });
      if (returnEventsUser) {
        res.status(200).json(returnEventsUser);
      }
    } else res.status(400).json({ err: "une erreur c'est produite" });
  },
};
