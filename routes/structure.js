const express = require("express");
const Structure = require("../models/structure");

const router = express.Router();

router.post("/structure/add", async (req, res) => {
  try {
    const { id, name, text, to, composition } = req.body;

    const newStructure = new Structure({
      id,
      name,
      text,
      to,
      composition,
    });
    await newStructure.save();
    res
      .status(201)
      .json({
        message: "Структура успешно добавлена",
        structure: newStructure,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const structureRoutes = router
module.exports = structureRoutes;
