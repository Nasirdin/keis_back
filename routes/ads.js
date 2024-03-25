const express = require("express");
const AdModel = require("../models/ad");

const router = express.Router();

router.get("/ads", async (req, res) => {
  try {
    const examples = await AdModel.find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/ads/add", async (req, res) => {
  try {
    const { img, title, subtitle, date, text, department } = req.body;

    const newAd = new AdModel({
      img,
      title,
      subtitle,
      date,
      text,
      department,
    });
    await newAd.save();
    res
      .status(201)
      .json({ message: "Объявление успешно добавлено", ad: newAd });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/ads/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const adsItem = await NewsModel.findById(id);

    if (!adsItem) {
      return res.status(404).json({ message: "Ad item not found" });
    }
    await AdModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Ad item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const adsRoutse = router;
module.exports = adsRoutse;
