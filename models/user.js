"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });

      User.belongsToMany(models.Post, {
        through: "Event",
        foreignKey: "userId",
      });
      User.hasMany(models.Event, {
        foreignKey: "userId",
        references: {
          model: "Users",
          key: "id",
        },
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userEmail: DataTypes.STRING,
      userPassword: DataTypes.STRING,
      userPrivate: DataTypes.BOOLEAN,
      userBadge: DataTypes.INTEGER,
      userXp: DataTypes.INTEGER,
      userDescription: DataTypes.STRING,
      userImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
