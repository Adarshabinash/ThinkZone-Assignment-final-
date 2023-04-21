const mongoose = require("mongoose");

const master_students = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("master_students", master_students);
