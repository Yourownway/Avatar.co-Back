"use strict";

const bcrypt = require("bcrypt");
const uuid4 = require("uuid/v4");
const password = "azerty";
const hash = bcrypt.hashSync(password, 10);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 10,
          userEmail: "Lorris@gmail.com",
          firstName: "Lorris",
          lastName: "Dhedin",
          userPassword: hash,
          UserBadge: "4",
          UserXp: "4500",
          UserDescription:
            "Salut moi c'est Lorris. Fan de course à pied j'organise souvent des footing vers le Parc de Sceaux pour le Plaisir de tous ! ",
          UserPrivate: false,
          // createdAt: Date.UTC(),
          // updatedAt:Date.UTC(),
        },
        {
          id: 20,
          userEmail: "Jimi@gmail.com",
          firstName: "Jimi",
          lastName: "Adelay",
          userPassword: hash,
          UserBadge: "5",
          UserXp: "5000",
          UserDescription:
            "Bonjour à tous , je m'appel Jimi. Je pratique le Tai-chi-chuan depuis bientot 10ans. Je vous accompagne lors de seance d'initiation",
          UserPrivate: false,
          // createdAt: Date.UTC(),
          // updatedAt:Date.UTC(),
        },
        {
          id: 30,
          userEmail: "Yoram@gmail.com",
          firstName: "Yoram",
          lastName: "Taieb",
          userPassword: hash,
          UserBadge: "4",
          UserXp: "4300",
          UserDescription:
            "Bonjour à tous , je m'appel Yoram. Je pratique le WorkOut au parc de Bercy, c'est avec plaisir que j'organise des rendez vous laba pour tout niveau",
          UserPrivate: false,
          // createdAt: Date.UTC(),
          // updatedAt:Date.UTC(),
        },
        {
          id: 40,
          userEmail: "Patrik@gmail.com",
          firstName: "Patrik",
          lastName: "Zamble-bi",
          userPassword: hash,
          UserBadge: "0",
          UserXp: "0",
          UserDescription:
            "Hello ! Je suis Patrik, noveau sur cette application, j'espere me faire plein de nouveau amis et augmenter mon niveau de sport par la meme ocasion! ",
          UserPrivate: false,
          // createdAt: Date.UTC(),
          // updatedAt:Date.UTC(),
        },
        {
          id: 50,
          userEmail: "Lucas@gmail.com",
          firstName: "Lucas",
          lastName: "Beneston",
          userPassword: hash,
          UserBadge: "2",
          UserXp: "2300",
          UserDescription:
            "Coucou , je m'appel Lucas. J'adore la natation et le footing. On se voit à l'entrainement!",
          UserPrivate: false,
          // createdAt: Date.UTC(),
          // updatedAt:Date.UTC(),
        },
        {
          id: 60,
          userEmail: "Yassin@gmail.com",
          firstName: "Yassin",
          lastName: "Lck",
          userPassword: hash,
          UserBadge: "4",
          UserXp: "4500",
          UserDescription:
            "Bonjour, je m'appel Yassin. Je pratique le Workout principalement depuis que les salles de sport ont fermés",
          UserPrivate: false,
          // createdAt: Date.UTC(),
          // updatedAt:Date.UTC(),
        },
        {
          id: 70,
          userEmail: "Coline",
          firstName: "Coline",
          lastName: "Supercool",
          userPassword: hash,
          UserBadge: "2",
          UserXp: "2500",
          UserDescription:
            "Hello , moi c'est Coline. J'ai repris le sport grace à cette aplication que je trouve super cool. J'aime le sport et la natation . A bientot +",
          UserPrivate: false,
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
