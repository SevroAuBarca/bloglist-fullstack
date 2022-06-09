require("dotenv").config();
const process = require("process");

let MONGO_URL = process.env.URL_LOCAL;
const PORT = process.env.PORT;

if (process.env.NODE_ENV === "test") {
  MONGO_URL = process.env.TEST_URL;
}

module.exports = {
  MONGO_URL,
  PORT,
};
