'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Command extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Service, { foreignKey: 'service_Id', targetKey: 'serviceId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
      this.belongsTo(models.Office, { foreignKey: 'office_Id', targetKey: 'officeId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
  };
  Command.init({
    commandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: false,
      unique: true,
      primaryKey: true
    },
    commandName: DataTypes.STRING,
    dateCreated: DataTypes.DATE,
    office_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Offices',
        key: 'officeId'
      }
    },
    service_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Services',
        key: 'serviceId'
      }
    }
  }, {
    sequelize,
    modelName: 'Command',
  });
  return Command;
};