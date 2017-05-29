var express =require("express");
var authors = express.Router();

authors.get('/authors/:id', function(req, res) {
  res.render("author", {
    id: Number(req.params.id),
    items: req.app.get('newsFile').news,
    authors: req.app.get("authorsFile").authors
  });
});

module.exports = authors;
