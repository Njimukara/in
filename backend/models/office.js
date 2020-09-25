'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasOne(models.Service, {foreignKey: ''});
      this.hasMany(models.Command, {foreignKey: 'office_Id'});
      this.belongsTo(models.Service, { foreignKey: 'service_Id', targetKey: 'serviceId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
  };
  Office.init({
    officeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    officeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    officePassword: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    service_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Services',
        key: 'serviceId'
      }
    }
  }, {
    sequelize,
    modelName: 'Office',
  });
  return Office;
};