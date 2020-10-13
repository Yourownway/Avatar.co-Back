"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      parcId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Parcs", // 'Movies' would also work
          key: "id",
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories", // 'Movies' would also work
          key: "id",
        },
      },
      postName: {
        type: Sequelize.STRING,
      },
      postUserRole: {
        type: Sequelize.STRING,
      },
      postDescription: {
        type: Sequelize.STRING,
      },
      postDate: {
        type: Sequelize.DATE,
      },
      postMaxGuest: {
        type: Sequelize.INTEGER,
      },
      postBadgeRequired: {
        allowNul: true,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Posts");
  },
};
