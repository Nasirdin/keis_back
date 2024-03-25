const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    subtitle: String,
    date: String,
    text: String,
    department: String,
  },
  { versionKey: false }
);

const AdModel = mongoose.model("Ad", adSchema);

module.exports = AdModel;
