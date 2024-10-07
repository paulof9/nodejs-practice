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

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}