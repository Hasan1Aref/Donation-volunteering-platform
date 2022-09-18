'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Volunteers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vSpecialization: {
        type: Sequelize.STRING,
        allowNull:false
      },
      dateFrom: {
        type: Sequelize.DATE,
        allowNull:false
      },
      dateTo: {
        type: Sequelize.DATE,
        allowNull:false
      },
      hours: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      UserId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Volunteers');
  }
};