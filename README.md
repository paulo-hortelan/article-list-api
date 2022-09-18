# Article List API

Este projeto é uma API desenvolvida em `Node.js` e `Express` e que pode ser acessado através do site ...

## Funcionalidades do projeto

É uma API que obtém, cria, deleta e altera artigos. Além disso, ele também possui um simples web crawler que acessa determinados sites e retorna uma lista dos seus artigos.

## Tecnologias e dependências

- [Node.js v16.13.2](https://nodejs.org/en/)
- [Express 4.18.1](https://expressjs.com/pt-br/)
- [Body-parser 1.20.0](https://www.npmjs.com/package/body-parser)
- [Cheerio 1.0.0-rc.12](https://cheerio.js.org)
- [Cors 2.8.5](https://www.npmjs.com/package/cors)
- [Got 11.8.3](https://www.npmjs.com/package/got)
- [Uuid 9.0.0](https://www.npmjs.com/package/uuid)

# Instalação

- Clone este repositório e após isso instale as dependencias do projeto utilizando o seguinte comando:

```sh
$ npm install
```

# Execução

Execute a aplicação com o comando `npm start`, ele irá iniciar o programa em [localhost:3003](http://localhost:3000)

```sh
$ npm start
```

# Endpoints da API

## Artigos

É possível adicionar, alterar e remover os artigos. Para realizar tais ações, basta acessar os métodos descritos abaixo

Método    | Endpoint | Descrição
:-------: | :------: | :------:
  `GET`   | `/articles` | Retorna um JSON com a lista dos artigos salvos
Exemplo 2 | R$ 8
Exemplo 3 | R$ 7
Exemplo 4 | R$ 8

# Exemplos

<details>
  <summary>GET</summary>
  
  - Request
  
  ```
  localhost:3003/articles ou https://article-list-api.herokuapp.com/articles
  ```
  - Response
  ```
  [
    {
      "id":"d6e17e23-010b-4177-b519-7a87a5d1876f",
      "titulo":"O que são testes automatizados",
      "link":"https://devgo.com.br/o-que-sao-testes-automatizados",
      "data":"2022-09-18T21:52:55.108Z"
    }
  ]
  ```
</details>

<details>
  <summary>POST</summary>
  
  - Request
  
  ```
  localhost:3003/articles ou https://article-list-api.herokuapp.com/articles
  ```
  - Response
  ```
  [
    {
      "id":"d6e17e23-010b-4177-b519-7a87a5d1876f",
      "titulo":"O que são testes automatizados",
      "link":"https://devgo.com.br/o-que-sao-testes-automatizados",
      "data":"2022-09-18T21:52:55.108Z"
    }
  ]
  ```
</details>
