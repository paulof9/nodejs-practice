/*const { Sequelize, Op } = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', { //db, usuario, senha (mysql)
    host: "localhost",
    dialect: 'mysql'
});  

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!");
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro);
});
//conexão estabelecida
*/

/*const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});
*/

/*Postagem.sync({ force: true }).then(() => {
    console.log("Tabela criada com sucesso!");
}).catch((erro) => {
    console.log("Erro ao criar tabela: " + erro);
});*/

/*Postagem.create({
    titulo: "UM TITULO QUALQUER!",
    conteudo: "UM CONTEUDO QUALQUER!!!!"
})
*/

/*Postagem.destroy({
    where: {
        id: {
            [Op.in]: [1, 2, 3, 4, 5, 6, 7]
        }
    }
        
}).then(() => {
    console.log("Postagens deletadas com sucesso!");
}).catch((erro) => {
    console.log("Erro ao deletar postagens: " + erro);
});*/

/*Postagem.update(
    { 
        id: "1"
    },
    {
        where: { id: 11 } // Condição: atualiza onde o id é 1
    }
).then(() => {
    console.log("Postagem atualizada com sucesso!");
}).catch((erro) => {
    console.log("Erro ao atualizar a postagem: " + erro);
});*/

/*const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
*/

/*Usuario.sync({ force: true }).then(() => {
    console.log("Tabela criada com sucesso!");
}).catch((erro) => {
    console.log("Erro ao criar tabela: " + erro);
});*/