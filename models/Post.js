const db = require('./db') //"." sinaliza que /db esta na mesma pasta que Post.js (models)

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true})
module.exports = Post