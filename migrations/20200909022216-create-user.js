"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userPassword: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userBadge: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userPrivate: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      userXp: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userDescription: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        // allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
