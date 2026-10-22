const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Country = sequelize.define(
  "Country",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "countryList",
    timestamps: false,
  }
);

module.exports = Country;