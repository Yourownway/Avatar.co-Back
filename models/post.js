"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.hasMany(models.Event, {
        foreignKey: {
          name: "postId",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      Post.belongsTo(models.User);
      Post.belongsTo(models.Parc);
      Post.belongsTo(models.category);
      Post.belongsToMany(models.User, {
        through: "Event",
        foreignKey: "postId",
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
