'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Poste.hasMany(models.Personnel,{
        foreignKey : 'poste_id',
        as: 'personnels'
      })

    }
  }
  Poste.init({
    post_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Poste',
  });
  return Poste;
};