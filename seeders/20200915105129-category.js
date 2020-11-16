"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          categoryName: "Footing",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "Cyclisme",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "Fitness",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          categoryName: "WorkoOut",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Tai-Chi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Football",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Natation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Yoga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Meditation",
          createdAt: new Date(),
          updatedAt: new Date(),
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
