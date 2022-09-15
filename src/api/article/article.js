const { v4: uuidv4 } = require("uuid");

const articles = [
    {
        id: uuidv4(),
        titulo: "O que são testes automatizados",
        link: "https://devgo.com.br/o-que-sao-testes-automatizados",
        data: new Date(),
    },
    {
        id: uuidv4(),
        titulo: "Como fazemos o Gitflow",
        link: "https://devgo.com.br/como-fazemos-o-gitflow",
        data: new Date(),
    },
];

module.exports = articles;
