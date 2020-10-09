"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: { name: "userId", allowNull: false },
      });
      // User.hasMany(models.Event, {
      //   foreignKey: { name: "userId", allowNull: false },
      // });
      User.belongsToMany(models.Event, {
        through: "userId",
        as: "eventuser",
        foreignKey: "eventId",
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userEmail: DataTypes.STRING,
      userPassword: DataTypes.STRING,
      userRole: DataTypes.STRING,
      userPrivate: DataTypes.STRING,
      userRank: DataTypes.INTEGER,
      userDescription: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
