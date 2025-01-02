const express = require("express");
const { router } = require("./routes/router");
const { dbConnection } = require("./config/dbConnect");

const app = express();

app.use("/", router);

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
