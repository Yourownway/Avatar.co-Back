"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          userId: "10",
          postId: "1",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "30",
          postId: "2",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "50",
          postId: "3",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "30",
          postId: "4",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "20",
          postId: "5",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "60",
          postId: "6",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //participate and validate : validation true request false
        {
          userId: "10",
          postId: "6",
          eventisAdmin: false,
          eventValidation: true,
          eventComment: "",
          eventRequest: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //utilisateur en attente
        {
          userId: "10",
          postId: "5",
          eventisAdmin: false,
          eventValidation: false,
          eventComment: "",
          eventRequest: true,
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
