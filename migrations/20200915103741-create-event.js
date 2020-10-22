"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      postId: {
        references: { model: "Posts", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      eventIsAdmin: {
        type: Sequelize.BOOLEAN,
      },
      eventValidation: {
        type: Sequelize.BOOLEAN,
      },
      eventRequest: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      eventComment: {
        defaultValue: null,
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Events");
  },
};
