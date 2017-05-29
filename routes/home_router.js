var express =require("express");
var home = express.Router();

home.get('/', function(req, res) {
  res.render("index", {
    news: req.app.get("newsFile").news,
    categories: req.app.get('categoriesFile').categories,
    authors: req.app.get('authorsFile').authors
  });
});

module.exports = home;
