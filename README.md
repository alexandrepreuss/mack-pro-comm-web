---
title: "CommWeb"
author: "Mack pro"
---

**Índice**

- [1. Introdução](#1-introdução)
- [2. Escopo do projeto](#2-escopo-do-projeto)
- [3. Requisitos do projeto](#3-requisitos-do-projeto)
- [4. Integrantes do grupo](#4-integrantes-do-grupo)

## 1. Introdução

Esse projeto está sendo elaborado para a disciplina _Prática Profissional em Análise e Desenvolvimento de Sistemas_, consiste no desenvolvimento de todo o processo de implantação de uma aplicação para comunidade web (na internet) onde seus membros poderão compartilhar as suas impressões sobre os browser games (jogos on-line) que já jogaram, identificando os que gostaram e os que não gostaram.

O **CommWeb** deverá ser uma comunidade web onde seus membros poderão compartilhar as suas impressões sobre os browser gamers que já jogaram, identificando o que gostaram e o que não gostaram. 

Com estas informações, o **CommWeb** poderá dar para cada membro recomendações de browser games que ele ainda não conhece e que provavelmente irá gostar.


## 2. Escopo do projeto

O escopo desse projeto é um sistema web que permite o usuário conhecer, cadastrar e avaliar jogos de navegadores. O projeto deverá seguir os seguinte story points definidos pelo professor da matéria: 

1. O administrador do **CommWeb** será responsável por cadastrar os _browser games_ que serão avaliados pelos membros.

2. Os browser games serão organizados nas seguintes categorias iniciais: _Strategy_, _Shooter_, _Puzzle_, _Arcade_, _Role Playing Game (RPG)_, _Sports_, _Action_, _Adventure_. No entanto, o administrador poderá editar esta lista, criando novas categorias ou alterando os nomes das categorias já cadastradas.

3. Ao cadastrar um _browser game_, o administrador deverá fornecer as seguintes informações: nome, categoria (conforme as opções do item anterior), URL de acesso ao jogo, URL do vídeo de demonstração (se houver), descrição em 255 caracteres e imagem ilustrativa.

4. Qualquer pessoa poderá se cadastrar como membro do **CommWeb** mediante o fornecimento das seguintes informações: nome completo, username que deseja utilizar, senha para acessar o sistema, data de nascimento, estado e país. Cada membro poderá atualizar posteriormente os dados fornecidos no cadastro.

5. O membro terá as seguintes opções para buscar pelos _browser games_ cadastrados: (a) busca pelo nome ou por parte do nome, (b) busca pela categoria (ao selecionar uma das categorias cadastradas, é apresentada uma lista dos browser games desta categoria em ordem alfabética).

6. Após navegar até um determinado _browser game_, o membro poderá avaliá-lo definindo quantas estrelas (de 1 a 5) dará para o jogo e escrevendo um texto de até 255 caracteres. Caso o membro já tenha avaliado o _browser game_ anteriormente, ele visualizará as informações da avaliação que havia feito e terá a opção de alterá-las (afinal, pode ser que tenha mudado a sua opinião sobre o jogo).

7. Após navegar até um determinado _browser game_, o membro poderá também visualizar uma lista com todas as avaliações que já foram feitas para o jogo selecionado pelos outros membros do **CommWeb**.

8. Se o membro achar que a avaliação feita pelo outro membro foi útil, será possível marcar a opção "Esta avaliação foi útil para mim".

9. O membro poderá solicitar uma lista das avaliações mais úteis do **CommWeb**, ordenadas e mostrando primeiro as que receberam mais marcações na opção "Esta avaliação foi útil para mim".

10. Ao escolher visualizar as recomendações que o **CommWeb** tem a oferecer, o membro visualizará uma lista com os browser games que ele ainda não avaliou e provavelmente irá gostar. Para dar recomendações de acordo com o "gosto" do membro, o **CommWeb** deverá utilizar um algoritmo escolhido pela equipe. O algoritmo escolhido deverá ser explicado em detalhes na documentação do projeto.

11. O administrador poderá obter os seguintes relatórios de um determinado período (ou seja, definindo as datas inicial e final) de operação do **CommWeb**:
     - 5 jogos que receberam maior número de avaliações;<br>
     - 5 membros que realizaram o maior número de avaliações;<br>
     - 5 jogos que têm a maior nota média de avaliação (neste caso, só devem ser levados em conta os jogos que já receberam pelo menos 4 avaliações no
período);<br>
     - 3 categorias que receberam maior número de avaliações.
     
## 3. Requisitos do projeto

a) O **CommWeb** deverá ser colocado em operação como uma aplicação web.<br>
b) Os dados do **CommWeb** deverão ser persistidos em uma base de dados (relacional ou NoSQL).<br>

## 4. Instalação local Backend

Para rodar o backend desse projeto localmente é necessário baixar ou clonar os arquivos deste repositório [link](https://github.com/guilchaves/mack-pro-comm-web) em uma máquina com Node.js.
Primeiramente, deve-se abrir a pasta raiz do projeto e digitar via terminal a seguinte linha de comando:
### `npm install`
ou caso tenha instalado o gerenciador de pacotes yarn, pode utilizar também:
### `yarn install`
esses comandos instalam as dependências necessárias para o uso projeto. 
Após completar a instalação das dependências, criar um arquivo chamado **.env** na pasta raiz do projeto. Este arquivo deve conter as seguintes informações das variáveis de ambiente que são utilizadas no projeto.

    HOST = endereço do servidor (localhost, se testado localmente)*
    USER = usuário do banco de dados*
    PASSWORD = senha do banco de dados*
    DATABASE = nome da base de dados*
    * para os dados reais do servidor deste projeto ver PDF do Aplicando 5.

_NOTA: Para publicar o **Frontend** localmente utilize os arquivos e siga as orientações desse repositório [link](https://github.com/guilchaves/comm-web-front)._

### 4.1 Banco de dados
No terminal, usar um dos seguintes comando para criar o banco de dados, caso ainda não tenha criado:
### `npx sequelize-cli db:create`
### `npx sequelize db:create`
### `yarn sequelize-cli db:create`
### `yarn sequelize db:create`

O banco criado com um desses comando utiliza o nome que estiver na variável DATABASE.

Após criado o banco, é necessário criar as tabelas, que são criadas via terminal com um dos seguintes comandos:
### `npx sequelize-cli db:migrate`
### `npx sequelize db:migrate`
### `yarn sequelize-cli db:migrate`
### `yarn sequelize db:migrate`

Após terminada configuração do banco de dados, se caso for testar localmente, o servidor pode ser iniciado com um dos seguintes códigos no terminal
### `npm start`
### `yarn start`
com isso, o servidor do backend estará funcionando no endereço **http://localhost:8080**


### 4.2 Sistema de Recomendação

O Sistema de Recomendação está baseado no modelo de interação do usuário. O fator escolhido é a nota que o usuário atribui a cada jogo a partir da tela de avaliação. 

O sistema irá calcular a média de notas dos jogos de cada categoria e armazenar essa médias. Depois o sistema irá classificar as três categorias com melhores notas e armazenar em na tabela auxiliar **user_avgrt**. 

O sistema de recomendação foi inicialmente previsto para rodar em Python, considerando a existência de mais de uma categoria por jogo. Porém, após revisar os requisitos e ver que inicialmente seria apenas uma categoria por jogo, o que simplifica a matrix usuário x categoria x jogo, optamos por implementar o sistema por meio de funções e triggers em SQL no próprio banco de dados PostgreeSQL. 

A lista de jogos recomendados será entregue a partir de uma função ( recomendacoes() ) que identifica os dois jogos melhores avaliados para cada uma das categorias de preferência do usuário, gerando assim uma lista de recomendações com dois jogos para cada uma das duas categorias preferidas de cada usuário e ainda mais um jogo da terceira categorias. Enquanto o usuário não realizar avaliações o sistema irá preencher as recomendações com os jogos que tem a maior média de avaliações.

Dessa forma, após dar implantar o backend e o frontend é necessário rodar os códigos em SQL na sequência do arquivo **database_recomendacao**.

## 5. Integrantes do grupo

Alexandre Ricci Preuss - 19508387 <br>
Guilherme G Chaves - 20014481<br>
Leonidas L N Oliveira - 20009240<br>
William Vilas Boas Gomes - 20004346<br>
Willian Leite Barcelos - 1950926-1<br>
