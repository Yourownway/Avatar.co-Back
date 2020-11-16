const models = require("../models");

module.exports = {
  getAllParc: async (req, res) => {
    const places = await models.Parc.findAll({
      attributes: ["parcName", "id"],
    });
    if (places) {
      res.status(200).json(places);
    }
  },
};
