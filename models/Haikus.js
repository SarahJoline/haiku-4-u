const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HaikuSchema = new Schema({
  subject: {
    type: String,
    minlength: 3,
    description: "subject is required",
  },
  text: {
    type: String,
    minlength: 15,
    description: "haiku is required, duh",
  },
  author: {
    type: String,
    minlength: 3,
    description: "no anonymous poetry here",
  },
  authorID: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Haikus = mongoose.model("Haikus", HaikuSchema);

module.exports = Haikus;
