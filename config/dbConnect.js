const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("world", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Db Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { dbConnection, sequelize };
