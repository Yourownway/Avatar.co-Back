module.exports = {
  creatEvent: async (req, res) => {
    let event = ({
      eventValidation,
      eventCurrentGuest,
      eventStatus,
      userRate,
      userComment,
    } = req.body);
    for (const property in event) {
      if (event[property] == null || event[property] == "") {
        return res
          .status(400)
          .json({ error: `Le champ ${property} n'est pas renseigné` });
      }
    }
    const newEvent = await models.Event.create(event);
    if (newEvent) return res.status(200).json(newEvent);
    else {
      console.log(err);
      return res.status(500).json({
        error:
          "500: création du post impossible impossible postCtrl.createPost",
      });
    }
  },
  getOneEvent: async (req, res) => {
    const eventId = req.params.id;
    if (eventId) {
      const event = await models.Event.findOne({ where: { id: eventId } });
      if (event) {
        return res.status(200).json({ event: event });
      } else
        return res
          .status(404)
          .json({ err: "404: l'event n'exsiste pas eventCtrl.getOneEvent" });
    } else {
      return res
        .status(404)
        .json({ err: "404: page indisponible eventCtrl.getOneEvent" });
    }
  },

  getAllEvent: async (req, res) => {
    const eventAll = await models.Post.findAll({ limit: 8 });
    if (eventAll) {
      res.status(200).json({ post: eventAll });
    } else {
      res
        .status(500)
        .json({ err: "500 il n'y a pas d' event eventCtrl.eventAll" });
    }
  },

  editEvent: async (req, res) => {
    const eventId = req.params.id;
    const updateEvent = await models.Event.update(req.body, {
      where: { id: eventId },
    });
    if (updateEvent) {
      const updatedEvent = await models.Event.findOne({
        where: { id: eventId },
      });
      console.log(updatedEvent);
      return res.status(200).json({ proflil: `'event modifié'` });
    } else {
      return res
        .status(500)
        .json({ err: "500 ressource non trouvé eventCtrl.eventPost" });
    }
  },
  deleteEvent: (req, res) => {},
};
