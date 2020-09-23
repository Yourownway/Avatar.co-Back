"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Parcs",
      [
        {
          parcName: "Parc du Luxembourg",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          parcName: "Parc de Sceaux",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          parcName: "Parc des Buttes Chaumont",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          parcName: "Parc Montsouris",
          createdAt: "2018-07-22 00:00:00",
          updatedAt: "2018-07-22 00:00:00",
        },
        {
          parcName: "Parc Monceau",
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
