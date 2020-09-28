"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userEmail: "lolo",
          firstName: "lolo",
          lastName: "lolo",
          userPassword: "lolo",
          UserRole: "coach",
          UserPrivate: "yes",
          UserRank: "1",
          UserDescription: "sss",
          // createdAt: Date.UTC(),
          // updatedAt:Date.UTC(),
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
