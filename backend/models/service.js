'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Office, { foreignKey: 'service_Id' } )
      this.hasMany(models.Command, { foreignKey: 'service_Id' } )
    }
  };
  Service.init({
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    serviceName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};