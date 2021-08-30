## Primeiro será instalado o React, utilizando os comandos.
    npx create-react-app nome_do_projeto

## Em seguida será acessado o diretório que foi instalado o React.
    cd nome_do_projeto

## Com o projeto aberto, será aberto novo terminal no editor, com o terminal aberto será executado o comando abaixo para rodar o projeto.
    npm start

## No arquivo "src/index.js", somente deixado os "import" necessário para o projeto.

## Em seguida instalado a dependência Axios para realizar a conexão com a API.
    npm install --save axios

## Com a dependência instalada, criado o arquivo "src/api.js" com a instrução para buscar os dados na API.

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

export default api;

## O próximo passo é incluir o arquivo "src/api.js" no arquivo "src/App.js". Arquivo responsável em imprimir os dados retornados da API na tela.

## Após implementado, pode ser acessada a rota "http://localhost:3000/" no navegador para ver o resultado.
