"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          userId: "1",
          postId: "1",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          postId: "2",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "5",
          postId: "3",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          postId: "4",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "2",
          postId: "5",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "6",
          postId: "6",
          eventisAdmin: true,
          eventValidation: true,
          eventComment: "",
          eventRequest: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //participate
        {
          userId: "1",
          postId: "6",
          eventisAdmin: false,
          eventValidation: true,
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
