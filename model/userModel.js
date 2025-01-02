const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    // freezeTableName: true,  // db === table name
    tableName: "users",
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = { User };
