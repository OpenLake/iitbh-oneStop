const mongoose = require('mongoose')
require("dotenv").config();
DB = process.env.DB;
mongoose
  .connect(
    "mongodb+srv://messenger:messenger@cluster0.g5ur8.mongodb.net/hackathon?retryWrites=true&w=majority",
    {
    }
  )

  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
