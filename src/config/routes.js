const articles = require("../api/article/article");
const devgoCrawler = require("../api/webcrawler/devgo");
const { v4: uuidv4 } = require("uuid");

module.exports = function (server) {
    server.get("/", function (req, res) {
        res.send("Bem vindo a API ");
    });

    server.get("/articles", function (req, res) {
        res.send(articles);
    });

    server.get("/articles/:id", function (req, res) {
        const article = articles.find((c) => c.id === req.params.id);
        if (!article)
            return res
                .status(404)
                .send("The article with the given id was not found");
        res.send(article);
    });

    server.post("/articles", function (req, res) {
        if (articles.length < 300) {
            const article = {
                id: uuidv4(),
                titulo: req.body.titulo,
                link: req.body.link,
                data: new Date(),
            };
            articles.push(article);
            res.send(article);
        } else {
            return res.status(404).send("Array length error");
        }
    });

    server.put("/articles/:id", function (req, res) {
        const article = articles.find((c) => c.id === req.params.id);
        if (!article)
            return res
                .status(404)
                .send("The article with the given id was not found");
        article.titulo = req.body.titulo;
        article.link = req.body.link;
        res.send(article);
    });

    server.delete("/articles/:id", function (req, res) {
        const article = articles.find((c) => c.id === req.params.id);
        if (!article)
            return res
                .status(404)
                .send("The article with the given id was not found");

        let index = articles.map((item) => item.id).indexOf(req.params.id);
        if (index > -1) articles.splice(index, 1);
        res.send("The article was sucessfully deleted");
    });

    server.get("/webcrawler/devgo", function (req, res) {
        devgoCrawler.getCrawlerDevgo().then((resp) => {
            res.send(resp);
        });
    });
};
