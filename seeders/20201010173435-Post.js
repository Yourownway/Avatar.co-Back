"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          postName: "Footing au Parc de Sceaux", //STRING
          postUserRole: "user", //STRING,
          postDescription:
            "Salut à tous et a toutes , je vais courir au parc de Sceaux comme tout les Samedi, que ce qui m'aime me suive ! ", //STRING,
          postDate: new Date(Date.UTC(2020, 11, 22, 10, 30)), //DATE

          postMaxGuest: "5", //INTEGER
          postBadgeRequired: "3",
          userId: "10",
          parcId: "2",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postName: "Footing Matinal au Parc du Luxembourg", //STRING
          postUserRole: "user", //STRING,
          postDescription:
            "Bonjour , je propose un footing au parc du luxembourg dimanche. durée moyenne 1h pour 7km", //STRING,
          postDate: new Date(Date.UTC(2020, 11, 23, 9)), //DATE
          postMaxGuest: "10", //INTEGER
          postBadgeRequired: "2",
          userId: "30",
          parcId: "1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postName: "Balade à Velo", //STRING
          postUserRole: "user", //STRING,
          postDescription:
            "Coucou , je vous propose une balade à velo au bois de vincennes", //STRING,
          postDate: new Date(Date.UTC(2020, 11, 23, 10, 30)), //DATE
          postMaxGuest: "4", //INTEGER
          postBadgeRequired: "1000",
          userId: "50",
          parcId: "3",
          categoryId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postName: "Workout à Bercy", //STRING
          postUserRole: "user", //STRING,
          postDescription:
            "Salut c'est Yoram , je propose Dimanche apres-midi une session WorkOut au terrain de Bercy", //STRING,
          postDate: new Date(Date.UTC(2020, 11, 23, 14)), //DATE
          postMaxGuest: "3", //INTEGER
          postBadgeRequired: "3",
          userId: "30",
          parcId: "7",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postName: "Initiation au Tai-chi", //STRING
          postUserRole: "user", //STRING,
          postDescription:
            "Bonjour , je pratique le Thai chi depuis bientot 10 ans et je souhaite vous initiez à cet art, debutant accepté ! ", //STRING,
          postDate: new Date(Date.UTC(2020, 11, 22, 11)), //DATE
          postMaxGuest: "6", //INTEGER
          postBadgeRequired: "0",
          userId: "20",
          parcId: "4",
          categoryId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postName: "Match de Foot", //STRING
          postUserRole: "user", //STRING,
          postDescription:
            "Salut a tous , je propose une partie de foot à 6 contre 6", //STRING,
          postDate: new Date(Date.UTC(2020, 11, 23, 14, 30)), //DATE
          postMaxGuest: "12", //INTEGER
          postBadgeRequired: "1",
          userId: "60",
          parcId: "4",
          categoryId: "6",
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
