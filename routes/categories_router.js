var express =require("express");
var categories = express.Router();

categories.get('/categories/:id', function(req, res) {
  res.render("categorie", {
    id: Number(req.params.id),
    items: req.app.get('newsFile').news,
    categories: req.app.get("categoriesFile").categories
  });
});

module.exports = categories;
