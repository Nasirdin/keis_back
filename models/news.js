const mongoose = require("mongoose");

const newsScheme = new mongoose.Schema(
  {
    img: String,
    title: String,
    subtitle: String,
    date: String,
    text: String,
    departament: String,
  },
  { versionKey: false }
);

const NewsModel = mongoose.model("News", newsScheme);

module.exports = NewsModel;
