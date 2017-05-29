var express =require("express");
var news = express.Router();

news.get('/items/:id', function(req, res) {
  var newsFile = req.app.get("newsFile");
  var id = req.params.id;
  var i = 0;
  var item = "";
  while (i< newsFile.news.length) {
    if (newsFile.news[i].id == id) {
      item = newsFile.news[i];
    }
    i++;
  }
  if (item !== "") {
    res.render("news", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = news;
