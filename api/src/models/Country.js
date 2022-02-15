const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      type: DataTypes.STRING,
      unique: true,
      require: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      require: true,
    },
    flag: {
      type: DataTypes.STRING,
      require: true,
    },
    continent: {
      type: DataTypes.STRING,
      require: true,
    },
    capital: {
      type: DataTypes.STRING,
      require: true,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.STRING,
    },
  });
};
