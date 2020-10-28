const models = require("../models");
const { Op } = require("sequelize");

module.exports = {
  createPost: async (req, res) => {
    let post = ({
      postName,
      postUserRole,
      postDescription,
      postDate,
      postMaxGuest,
      parcId,
      categoryId,
      userId,
    } = req.body);
    for (const property in post) {
      if (post[property] == null || post[property] == "") {
        return res
          .status(400)
          .json({ error: `Le champ ${property} n'est pas renseigné` });
      }
    }
    const newPost = await models.Post.create(post);

    const newEvent = await models.Event.create({
      postId: newPost.id,
      userId: newPost.userId,
      eventIsAdmin: true,
      eventValidation: true,
      eventRequest: true,
    });

    if (newPost && newEvent) {
      const displayPost = await models.Post.findByPk(newPost.id, {
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
            model: models.Event,
            attributes: ["userId"],
          },
          {
            model: models.Parc,
            attributes: ["parcName"],
          },
          {
            model: models.category,
            attributes: ["categoryName"],
          },
          {
            model: models.User,
            attributes: ["firstName", "lastName", "userEmail"],
          },
        ],
      });

      if (displayPost) {
        return res.status(200).json(displayPost);
      }
    } else {
      console.log("erreur postCtrl create post");
    }
  },

  getOnePost: async (req, res) => {
    const postId = req.params.id;
    if (postId) {
      const post = await models.Post.findOne({ where: { id: postId } });
      if (post) {
        return res.status(200).json({ post: post });
      } else
        return res
          .status(404)
          .json({ err: "404: le post n'exsiste pas userCtrl.getOnePost" });
    } else {
      return res
        .status(404)
        .json({ err: "404: page indisponible userCtrl.getOnePost" });
    }
  },

  getSearchPost: async (req, res) => {
    if (req.query) {
      const search = await models.Post.findAll({
        where: { postName: { [Op.like]: "%" + req.query.postName + "%" } },
      });

      res.status(200).json({ search: search });
    } else {
      res.status(400).json({ err: "Champs vide" });
    }
  },
  getAllPost: async (req, res) => {
    const postAll = await models.Post.findAll({
      order: [["postDate", "DESC"]],

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
          // attributes: ["firstName", "lastName", "userEmail", "id"],
        },
        {
          model: models.Event,
          include: [{ model: models.User }],
          // attributes: [
          //   "id",
          //   "eventValidation",
          //   "eventIsAdmin",
          //   "eventRequest",
          //   "eventComment",
          //   "postId",
          //   "userId",
          // ],
        },
      ],
    });
    if (postAll) {
      res.status(200).json({ post: postAll });
    } else {
      res
        .status(500)
        .json({ err: "500 il n'y a pas de post postCtrl.postAll" });
    }
  },

  getPostByCategory: async (req, res) => {
    const categoryId = req.params.id;
    const postAll = await models.Post.findAll({
      limit: 8,
      where: { categoryId },
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
          attributes: ["parcName"],
        },
        {
          model: models.category,
          attributes: ["categoryName"],
        },
        {
          model: models.User,
          attributes: ["firstName", "lastName", "userEmail"],
        },
      ],
    });
    if (postAll) {
      res.status(200).json({ post: postAll });
    } else {
      res
        .status(500)
        .json({ err: "500 il n'y a pas de post postCtrl.postAll" });
    }
  },
  getPostByRate: async (req, res) => {
    const postAll = await models.Post.findByPk(47);
    return res.status(200).json({ proflil: postAll });
  },

  editPost: async (req, res) => {
    const postId = req.params.postId;
    const userId = req.params.userId;
    console.log(userId, "==========================================");
    try {
      const updatePost = await models.Post.update(req.body, {
        where: { id: postId, userId },
      });
      if (updatePost) {
        const updatedPost = await models.Post.findOne({
          where: { id: postId },
        });
        console.log(updatedPost);
        return res
          .status(200)
          .json({ proflil: `'post de ${updatedPost.postName} modifié'` });
      } else {
        console.log("==================+++++EDIT+++++++++++++");
        return res
          .status(500)
          .json({ err: "500 ressource non trouvé postCtrl.editPost" });
      }
    } catch (e) {
      console.log("editPost error", e);
    }
  },
  deletePost: async (req, res) => {
    const postId = req.params.postId;
    const deleted = await models.Post.destroy({
      where: { id: postId },
    });
    if (deleted) {
      return res.status(200).json({ succes: `Post supprimé` });
    } else {
      return res.status(404).json({ err: "post deja supprimé" });
    }
  },

  getPostByParc: (idParc) => {
    return Parcs.findAll({
      where: { idParc: idParc },
    });
  },
  getUserPost: async (req, res) => {
    const { userId } = req.body;
    const UserPost = await models.Post.findAll({
      limit: 8,
      where: { userId },
      raw: true,
      // order: [["postDate", "DESC"]],

      attributes: [
        "id",

        "postName",
        // "postUserRole",
        // "postDescription",
        // "postDate",
        // "postMaxGuest",
      ],
      include: [
        // {
        //   model: models.Parc,
        //   attributes: ["parcName"],
        // },
        // {
        //   model: models.category,
        //   attributes: ["categoryName"],
        // },
        // {
        //   model: models.User,
        //   attributes: ["firstName", "lastName", "userEmail", "id"],
        // },
        {
          model: models.Event,
          attributes: ["userId", "eventValidation", "eventIsAdmin"],

          // where: { eventValidation: true },
        },
      ],
    });
    if (UserPost) {
      res.status(200).json({ userPost: UserPost });
    } else {
      res.status(500).json({ erreur: "il n'ya pas encore de Post" });
    }
  },
  getLastUserPost: async (req, res) => {
    const userId = req.body.userId;
    const UserPost = await models.Post.findAll({
      limit: 1,
      where: { userId },
      order: [["postDate", "DESC"]],
    });
    if (UserPost) {
      res.status(200).json({ userPost: UserPost });
    } else {
      res.status(500).json({ erreur: "il n'ya pas encore de Post" });
    }
  },
  getEventByPostId: async (req, res) => {
    const postId = req.params.id;
    const Post = await models.Post.findOne({
      where: { id: postId },
      include: [
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
          model: models.User,
        },
      ],
    });
    res.status(200).json({ Post });
  },

  getAllUserEvent: async (req, res) => {
    const userId = req.params.id;
    const returnEventsUser = await models.Post.findAll({
      order: [["postDate", "DESC"]],
      raw: true,

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
          attributes: ["firstName", "lastName", "userEmail", "id", "userXp"],
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
  },
};
