const models = require("../models");

module.exports = {
  createPost: async (req, res) => {
    let post = ({
      postName,
      postCategory,
      postUserRole,
      postDescription,
      postDate,
      postMaxGuest,
      parcId,
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
    if (newPost) return res.status(200).json(newPost);
    else {
      console.log(err);
      return res.status(500).json({
        error:
          "500: création du post impossible impossible postCtrl.createPost",
      });
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
  getAllPost: async (req, res) => {
    const postAll = await models.Post.findAll({ limit: 8 });
    if (postAll) {
      res.status(200).json({ post: postAll });
    } else {
      res
        .status(500)
        .json({ err: "500 il n'y a pas de post postCtrl.postAll" });
    }
  },
  editPost: async (req, res) => {
    const postId = req.params.id;
    const updatePost = await models.Post.update(req.body, {
      where: { id: postId },
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
      return res
        .status(500)
        .json({ err: "500 ressource non trouvé postCtrl.editPost" });
    }
  },
  deletePost: async (req, res) => {
    const postId = req.params.id;
    const deleted = await models.Post.destroy({
      where: { id: postId },
    });
    if (deleted) {
      return res.status(200).json({ succes: `Post supprimé` });
    } else {
      return res.status(404).json({ err: "post deja supprimé" });
    }
  },
};
