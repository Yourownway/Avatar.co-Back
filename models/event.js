"use strict";
const { Model } = require("sequelize");

// const User = require("./user");
// const Post = require("./post");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.User);
      Event.belongsTo(models.Post);
    }
  }

  Event.init(
    {
      eventValidation: DataTypes.BOOLEAN,
      eventComment: DataTypes.STRING,
      eventIsAdmin: DataTypes.BOOLEAN,
      eventRequest: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
