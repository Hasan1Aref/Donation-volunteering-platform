'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Donations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      time: {
        type: Sequelize.TIME,
        allowNull:false
      },
      city: {
        type: Sequelize.STRING,
        allowNull:false
      },
      street: {
        type: Sequelize.STRING,
        allowNull:false
      },
      locPlus: {
        type: Sequelize.STRING,
        allowNull:true
      },
      userId: {
        type: Sequelize.INTEGER
      },
      postId: {
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
    await queryInterface.dropTable('Donations');
  }
};