const express = require("express"); //importando o express
const app = express(); //app recebe o express
const handlebars = require('express-handlebars');   //template engine
const bodyParser = require('body-parser');
const Post = require('./models/Post')

//cfg
    //template engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
        }
    }))
    app.set('view engine', 'handlebars'); 
    //BodyParser cfg
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//rotas
    app.get('/', function(req, res){    //"order", ordena a exibição, no caso, do mais novo pro antigo. (ASC o inverso.)
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){    //parametro "posts" é igual a x; post.all recebe todos os dados da DB;
            res.render('home', {posts: posts})  //entre chaves{} consigo passar os dados para o frontend
        }) 
        
    })
    app.get('/cad', function(req, res){
        res.render('formulario')    //arquivo com nome formulario (handlebars)
    })
    app.post('/add', function(req, res){    //app.post em vez de .get pois o formulario usa o metodo post!
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: "+erro)
        })
        //res.send("Formulário recebido!<br>Título: "+req.body.titulo+"<br>Conteúdo:<br>"+req.body.conteudo); //.handlebars //re.body.nomedoCampo
    })
    app.get('/deletar/:id', function(req, res){ //ao clicar no botao, destroi dados do id do botao que é igual ao id da tabela
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Essa postagem não existe!")
        })
    })


//servidor
app.listen(3500, function () {    
    console.log("Servidor Express aberto em localhost:3500"); //callback
});