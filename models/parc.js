"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Parc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Parc.hasMany(models.Post, {
        foreignKey: { name: "parcId", allowNull: false },
      });
    }
  }
  Parc.init(
    {
      parcName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Parc",
    }
  );
  return Parc;
};
