const mongoose = require("mongoose");

const structureSchema = new mongoose.Schema({
  id: Number,
  name: String,
  text: String,
  to: String,
  composition: [
    {
      id: Number,
      fullName: String,
      position: String,
      resume: String,
    },
  ],
});

const StructureModel = mongoose.model("Structure", structureSchema);

module.exports = StructureModel;
