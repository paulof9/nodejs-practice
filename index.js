const express = require("express"); //importando o express
const app = express(); //app recebe o express
const handlebars = require("express-handlebars");   //template engine

//cfg
    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars'); 
    //conexão com db mysql
        const { Sequelize } = require('sequelize');
        const sequelize = new Sequelize('test', 'root', '', { //db, usuario, senha (mysql)
            host: "localhost",
            dialect: 'mysql'
        }); //log msg
            sequelize.authenticate().then(function () {
                console.log("Conectado com sucesso!");
            }).catch(function (erro) {
                console.log("Falha ao se conectar: " + erro);
            }); //conexão estabelecida

//rotas
    app.get('/cad', function(req, res){
        res.send('ROTA DE CADASTRO DE POSTS')
    })

//servidor
app.listen(3500, function () {    
    console.log("Servidor Express aberto em localhost:3500"); //callback
});