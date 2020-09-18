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
      this.belongsTo(models.Service, {foreignKey: 'serviceID', foreignKeyConstraint: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
      this.hasMany(models.Command, {foreignKey: 'office_Id', as: 'commands', foreignKeyConstraint: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
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
    }
  }, {
    sequelize,
    modelName: 'Office',
  });
  return Office;
};