var express = require("express");
var path = require("path");
var app = express();

app.set('newsFile', require('./config/news.json'));
app.set('categoriesFile', require('./config/categories.json'));
app.set('authorsFile', require('./config/authors.json'));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/home_router"));
app.use(require("./routes/news_router"));
app.use(require("./routes/categories_router"));
app.use(require("./routes/authors_router"));

app.listen(app.get('port'), function() {
  app.get('port');
});
