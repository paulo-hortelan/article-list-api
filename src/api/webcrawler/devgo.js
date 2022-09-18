const cheerio = require("cheerio");
const got = require("got");

const URL = "https://devgo.com.br";

async function getCrawlerDevgo() {
    try {
        const response = await got(URL);
        let $ = cheerio.load(response.body);
        var articles = [];

        $(".blog-article-card.css-g70b67 > h1").each(function (index) {
            var linkHref = $(this).find("a").attr("href");
            const link = URL + linkHref;
            const titulo = $(this).find("a").text();

            let article = {
                titulo: titulo,
                link: link,
            };

            articles.push(article);
        });

        return articles;
    } catch (error) {
        console.log(error.response.body);
    }
}

module.exports = { getCrawlerDevgo };
