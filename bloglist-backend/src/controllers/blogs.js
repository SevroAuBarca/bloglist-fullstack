const blogsRouter = require("express").Router();
const Blog = require("../models/blogs.js");
const User = require("../models/users.js");

const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogsRouter.get("/", async (request, response) => {
  console.log("entro jiji");
  const data = await Blog.find({}).populate("users");

  response.json(data);
});

blogsRouter.get("/:id", async (request, response) => {
  const blog = await Blog.findById(request.params.id).populate("users", {
    username: 1,
    name: 1,
  });

  response.json(blog);
});

blogsRouter.post("/", async (request, response) => {
  const data = request.body;

  if (!data.hasOwnProperty("likes")) {
    data.likes = 0;
  }

  if (!data.hasOwnProperty("title") || !data.hasOwnProperty("url")) {
    response.status(400).end();
  }

  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);
  console.log(user);

  const blog = new Blog({
    title: data.title,
    author: data.author,
    url: data.url,
    likes: data.likes,
    users: user._id,
  });
  const result = await blog.save();
  user.blogs = [...user.blogs, result._id];
  await user.save();
  response.json(result);
});

blogsRouter.post("/:id/comments", async (request, response) => {
  const id = request.params.id;
  const comment = request.body.comment;
  const blog = await Blog.findById(id);
  console.log(blog);

  blog.comments = [...blog.comments, comment];
  const result = await Blog.findByIdAndUpdate(id, blog, {
    new: true,
  }).populate("users", {
    username: 1,
    name: 1,
  });
  console.log(result);
  response.json(result);
});

blogsRouter.put("/:id", async (request, response) => {
  const id = request.params.id;
  const data = await Blog.findById(id);
  data.likes = data.likes + 1;

  const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
    new: true,
  }).populate("users", {
    username: 1,
    name: 1,
  });
  response.json(updatedBlog);
});

blogsRouter.delete("/:id", async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);

  if (blog.users.toString() === user._id.toString()) {
    const blogs = user.blogs.filter(
      (blog) => blog.toString() !== request.params.id
    );
    user.blogs = [...blogs];
    await user.save();
    await Blog.findByIdAndDelete(request.params.id);
    response.status(204).end();
  } else {
    return response.status(401).json({ error: "token missing or invalid" });
  }
});

module.exports = blogsRouter;
