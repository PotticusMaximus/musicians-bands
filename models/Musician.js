const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

// TODO - define the Musician model
let Musician = sequelize.define("Musician", {
  name: DataTypes.STRING,
  instrument: DataTypes.STRING,
});

module.exports = {
  Musician,
};
