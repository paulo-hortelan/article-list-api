const articles = require("../api/article/article");

module.exports = function (server) {
    server.get("/", function (req, res) {
        res.send("Hello World");
    });

    server.get("/articles", function (req, res) {
        res.send(articles);
    });

    server.get("/articles/:id", function (req, res) {
        const article = articles.find((c) => c.id === parseInt(req.params.id));
        if (!article)
            return res
                .status(404)
                .send("The article with the given id was not found");
        res.send(article);
    });

    server.post("/articles", function (req, res) {
        if (articles.length < 300) {
            const article = {
                id: articles.length + 1,
                titulo: req.body.titulo,
                link: req.body.link,
            };
            articles.push(article);
            res.send(article);
        } else {
            return res.status(404).send("Array length error");
        }
    });

    server.put("/articles/:id", function (req, res) {
        const article = articles.find((c) => c.id === parseInt(req.params.id));
        if (!article)
            return res
                .status(404)
                .send("The article with the given id was not found");
        article.titulo = req.body.titulo;
        article.link = req.body.link;
        res.send(titulo);
    });
};
