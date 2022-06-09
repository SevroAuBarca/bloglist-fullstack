const mongoose = require("mongoose");
const { MONGO_URL } = require("../utils/config.js");
const { info, error } = require("../utils/logger.js");

module.exports = () =>
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      info("connected to MongoDB");
    })
    .catch(({ message }) => {
      error("error connecting to MongoDB:", message);
    });
