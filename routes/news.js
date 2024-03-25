// routes/news.js
const express = require("express");
const NewsModel = require("../models/news");

const router = express.Router();

router.get("/news", async (req, res) => {
  try {
    const examples = await NewsModel.find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/news/add", async (req, res) => {
  try {
    const { img, title, subtitle, date, text, department } = req.body;
    const newNews = new NewsModel({
      img,
      title,
      subtitle,
      date,
      text,
      department,
    });
    await newNews.save();
    res.status(201).json({  message: "Объявление успешно добавлено", news: newNews});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/news/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const newsItem = await NewsModel.findById(id);

    if (!newsItem) {
      return res.status(404).json({ message: "News item not found" });
    }
    await NewsModel.findByIdAndDelete(id);
    res.status(200).json({ message: "News item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const newsRoutes = router;
module.exports = newsRoutes;
