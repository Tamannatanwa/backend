const mongoose = require('mongoose');
const VideoSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
module.exports= mongoose.model("videos", VideoSchema);