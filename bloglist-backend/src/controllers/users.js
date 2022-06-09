const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/users.js");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs");

  response.json(users);
});

usersRouter.get("/:username", async (request, response) => {
  const username = request.params.username;

  const user = await User.findOne({ username: username }).populate("blogs");

  response.json(user);
});

usersRouter.post("/", async (request, response) => {
  const body = request.body;

  if (!(body.username && body.name && body.email && body.password)) {
    response.status(400).json({
      message: "error, filled data",
      data: {
        email: body.email || undefined,
        username: body.username || undefined,
        name: body.name || undefined,
        password: body.password || undefined,
      },
    });
  }
  if (body.password.length < 3) {
    response.status(400).json({ message: "error, password is too small" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    email: body.email,
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.json({ data: savedUser, status: 200 });
});

module.exports = usersRouter;
