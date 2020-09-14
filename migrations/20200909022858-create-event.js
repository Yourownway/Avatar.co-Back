'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'id'
        }},
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Posts', // 'Movies' would also work
            key: 'id'
          }},
      eventValidation: {
        type: Sequelize.BOOLEAN
      },
      eventCurrentGuest: {
        type: Sequelize.INTEGER
      },
      eventStatus: {
        type: Sequelize.BOOLEAN
      },
      userRate: {
        type: Sequelize.INTEGER
      },
      userComment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};