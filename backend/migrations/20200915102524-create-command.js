'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commands', {
      commandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      commandName: {
        type: Sequelize.STRING
      },
      dateCreated: {
        type: Sequelize.DATE
      },
      office_Id: {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'Offices',
          key: "officeId"
        }
      },
      service_Id: {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'Services',
          key: "serviceId"
        }
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
    await queryInterface.dropTable('Commands');
  }
};