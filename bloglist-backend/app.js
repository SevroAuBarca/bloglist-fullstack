const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./src/controllers/blogs.js");
const usersRouter = require("./src/controllers/users.js");
const loginRouter = require("./src/controllers/login.js");
const { info, error } = require("./src/utils/logger.js");
const { MONGO_URL } = require("./src/utils/config.js");
const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  morgan,
} = require("./src/utils/middleware.js");
const mongoConnection = require("./src/database/connection.js");
require("express-async-errors");

info("connecting to", MONGO_URL);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    info("connected to MongoDB");
  })
  .catch(({ message }) => {
    error("error connecting to MongoDB:", message);
  });

app.use(express.static("build"));
app.use(express.json());
app.use(requestLogger);
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
