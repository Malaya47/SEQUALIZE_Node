const { Sequelize } = require("sequelize");

const dbConnection = async () => {
  const sequelize = new Sequelize("world", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.log("Db Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { dbConnection };
