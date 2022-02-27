const express = require("express");
const route = express.Router();
const newController = require("../controllers/NewController");

route.use("/:slug", newController.newsId);
route.use("/", newController.index);
module.exports = route;
