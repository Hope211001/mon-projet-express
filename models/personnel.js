'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personnel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Personnel.hasMany(models.Leave,{
        foreignKey:'personnel_id',
        as: 'leaves'
      })
    }

  }
  Personnel.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    sexe: DataTypes.STRING,
    adresse: DataTypes.STRING,
    cin: DataTypes.STRING,
    matricule: DataTypes.STRING,
    tel: DataTypes.STRING,
    dateN: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Personnel',
  });
  return Personnel;
};