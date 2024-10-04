/*const express = require("express"); //importando o express
const app = express(); //app recebe o express

//definindo rotas
app.get('/', function(req, res){
    res.sendfile(__dirname + "/pages/index.html");
});

app.get('/sobre', function(req, res){
    res.sendfile(__dirname + "/pages/sobre.html");
});


app.get('/blog', function(req, res){
    res.sendfile(__dirname + "/pages/blog.html");
});

//parametros
app.get('/ola/:nome/:idade', function(req, res){
    res.send("Ola "+req.params.nome)
});


app.listen(3500, function(){    //servidor
    console.log("Servidor Express aberto em localhost:3500") //callback
});*/