const cheerio = require("cheerio");
const got = require("got");

const URL = "https://www.theenemy.com.br";

async function getCrawlerTheEnemy() {
    try {
        const response = await got(URL);
        let $ = cheerio.load(response.body);
        var articles = [];

        $(
            "#news-list-infinite > .news-list__item > .news-list__item__content"
        ).each(function (index) {
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

module.exports = { getCrawlerTheEnemy };
