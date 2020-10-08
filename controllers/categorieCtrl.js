const models = require("../models");

module.exports = {
  getAllCategorie: async (req, res) => {
    const Categories = await models.category.findAll({
      attributes: ["categoryName", "id"],
    });
    if (Categories) {
      res.status(200).json({ Categories });
    }
  },
  getPostByCategorie: async (req, res) => {
    if (req.query.categoryName) {
      const categorie = await models.category.findAll({
        where: { categoryName: req.query.categoryName },
        include: [
          {
            model: models.Post,
            attributes: [
              "id",
              "postName",
              "postUserRole",
              "postDescription",
              "postDate",
              "postMaxGuest",
            ],
          },
        ],
      });
      res.status(200).json({ categorie });
    }
  },
};
