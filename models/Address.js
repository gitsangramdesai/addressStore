const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
        unique: true,
        validate: {
            isEmail: {
            msg: "Please enter a valid email address"
        }
  }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cityId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cityList",
        key: "id",
      },
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    pin:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "addressList",
    timestamps: false,
  }
);

module.exports = Address;