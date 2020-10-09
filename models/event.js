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

         Event.belongsToMany(models.User, {
        through: "eventId",
        as: "eventuser",
        foreignKey: "userId",
      });
    }
  }
    }
  }
  Event.init(
    {
      eventValidation: DataTypes.BOOLEAN,
      eventCurrentGuest: DataTypes.INTEGER,
      eventIsUserCreate: DataTypes.BOOLEAN,
      eventRate: DataTypes.INTEGER,
      eventComment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
