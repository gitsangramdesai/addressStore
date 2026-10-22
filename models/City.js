const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const City = sequelize.define(
  "City",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "countryList",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "cityList",
    timestamps: false,
  }
);

module.exports = City;