const newsRoute = require("./news.route");
const siteRoute = require("./site.route");
const route = (app) => {
  // [GET] /news
  app.use("/news", newsRoute);
  app.use("/", siteRoute);
};

module.exports = route;
