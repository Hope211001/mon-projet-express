'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Leave.belongsTo(models.Personnel,{
        foreignKey: 'personne_id',
        as:'personnel'
      }),
      
      Leave.belongsTo(models.Type,{
        foreignKey:'type_id',
        as: 'type'
      })
    }
  }
  Leave.init({
    motif: DataTypes.STRING,
    dateDebut: DataTypes.DATE,
    dateFind: DataTypes.DATE,
    dure: DataTypes.INTEGER,
    personnel_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Leave',
  });
  return Leave;
};