const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      require: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      require: true
    },
    difficulty: {
      type: DataTypes.ENUM('Easy', 'Medium', 'Hard', 'Very Hard', 'Extreme'),
      require: true
    },
    duration: {
      type: DataTypes.STRING,
      require: true,
    },
    season: {
      type: DataTypes.ENUM('All Seasons', 'Spring', 'Summer', 'Autumn', 'Winter'),
      require: true
    }
  });
};