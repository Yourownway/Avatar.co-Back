"use strict";
const { Model } = require("sequelize");

// const User = require("./user");
// const Post = require("./post");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Post);
    }
  }
  Event.init(
    {
      // userId: DataTypes.INTEGER,
      // postId: DataTypes.INTEGER,
      eventValidation: DataTypes.BOOLEAN,
      eventCurrentGuest: DataTypes.INTEGER,
      eventStatus: DataTypes.BOOLEAN,
      userRate: DataTypes.INTEGER,
      userComment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
