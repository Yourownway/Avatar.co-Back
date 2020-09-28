const models = require("../models");

module.exports = {
  getParcById: async (req, res) => {
    // const placeId = req.params.id;
    console.log(req.params.id);
    const placeName = models.Parcs.findByPk(1);
    if (placeName) {
      return res.status(200).json({ placeName: placeName });
    }
  },
};
