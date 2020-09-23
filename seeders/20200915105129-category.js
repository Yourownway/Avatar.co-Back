"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          categoryName: "footing",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "fitness",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "boxe",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "natation",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "yoga",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "meditation",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
