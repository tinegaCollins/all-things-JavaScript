const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    author: String,
    date: Number
})

module.exports = mongoose.model("new", schema);
