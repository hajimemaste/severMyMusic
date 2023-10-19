const mongoose = require("mongoose");

const listSongSchema = new mongoose.Schema({
  singer: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  path: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  lyrics: {
    type: String,
    require: true,
  },
});

let mySongModel = mongoose.model("mySong", listSongSchema);

module.exports = { mySongModel };
