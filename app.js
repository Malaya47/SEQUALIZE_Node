const express = require("express");
const { router } = require("./routes/router");
const { dbConnection } = require("./config/dbConnect");
const { User } = require("./model/userModel");

const app = express();

app.use("/", router);

// User.sync();
// User.sync({ force: true });
User.sync({ alter: true })

app.listen(3000, () => {
  console.log(`Server is running on PORT: 3000`);
  dbConnection();
});

// file structure

/*
M - Model
V - View
C - Controller
*/
