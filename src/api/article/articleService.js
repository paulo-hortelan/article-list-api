const Article = require("./article");

Article.methods(["get", "post", "put", "delete"]);
Article.updateOptions({ new: true, runValidators: true });

module.exports = Article;
