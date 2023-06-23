const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URL, PORT = 3000 } = process.env;

const app = require("./app");

mongoose.set("strictQuery", true);

// const ctrl = require("./controllers");

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      // console.log("ctrl.getAll", ctrl.getAll);
      console.log("Database connection successful!");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
