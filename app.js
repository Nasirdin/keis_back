const express = require("express");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");
const loginRoutes = require("./routes/login");
const newsRoutes = require("./routes/news");
const adsRoutse = require("./routes/ads");
const structureRoutes = require("./routes/structure");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Ошибка подключения к MongoDB:"));
db.once("open", function () {
  console.log("Подключено к MongoDB");
});

app.use(express.json());
app.use("/", newsRoutes);
app.use("/", adsRoutse);
app.use("/", loginRoutes);
app.use("/", structureRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
