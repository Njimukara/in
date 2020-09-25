'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Offices', {
      officeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      officeName: {
        type: Sequelize.STRING
      },
      officePassword: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      service_Id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        refrences: {
          model: 'Services',
          key: 'serviceId'
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
    await queryInterface.dropTable('Offices');
  }
};