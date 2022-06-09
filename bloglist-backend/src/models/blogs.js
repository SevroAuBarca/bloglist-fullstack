const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const blogSchema = new mongoose.Schema({
  title: { type: String, minlength: 5, unique: true, required: true },
  author: { type: String, minlength: 5, required: true },
  url: { type: String, required: true },
  likes: { type: Number },
  comments: [{ type: String, minlength: 6 }],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

blogSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Blog", blogSchema);
