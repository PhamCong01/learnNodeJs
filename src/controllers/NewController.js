class NewController {
  // [GET] / news
  index(req, res) {
    res.render("news");
  }
  //[GET] /news/:newsId
  newsId(req, res) {
    res.send("hello world");
  }
}

module.exports = new NewController();
