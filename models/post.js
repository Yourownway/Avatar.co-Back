"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User);
      Post.belongsTo(models.Parc);
      Post.belongsTo(models.category);

      //Super Many-to-Many
      Post.belongsToMany(models.User, {
        through: "Event",
        foreignKey: "postId",
      });
      Post.hasMany(models.Event, {
        foreignKey: "postId",
        allowNull: false,
        references: {
          model: "Posts",
          key: "id",
        },
      });
    }
  }

  Post.init(
    {
      postName: DataTypes.STRING,
      postUserRole: DataTypes.STRING,
      postDescription: DataTypes.STRING,
      postDate: DataTypes.DATE,
      postMaxGuest: DataTypes.INTEGER,
      postBadgeRequired: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
