const mongoose = require("mongoose");

const FavoritSchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgList: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    duration: { type: String },
    isSeries: { type: Boolean, default: false },
    favorite: { type: Boolean, default: false },
    userId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorit", FavoritSchema);
