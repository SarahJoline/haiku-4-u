const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HaikuSchema = new Schema({
    subject: {
        type: String,
    },
    text: {
        type: String
    },
    author: {
        type: String
    }
});

const Haikus = mongoose.model("Haikus", HaikuSchema);

module.exports = Haikus;