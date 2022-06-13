const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    date: Number,
    age: Number,
    userID: String
})

module.exports = mongoose.model("comment", schema);