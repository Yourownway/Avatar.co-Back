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
      //   Event.belongsToMany(models.User, {
      //     through: "Event",
      //     as: "eventuser",
      //     foreignKey: "userId",
      //   });
    }
  }

  Event.init(
    {
      eventValidation: DataTypes.BOOLEAN,
      eventComment: DataTypes.STRING,
      eventIsAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
