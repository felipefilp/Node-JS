// Incluindo sistema de arquivos
const fs = require("fs");

//Criando um arquivo com o fs
fs.writeFileSync("arquivoteste.txt","Teste criando arquivo com node js");

// Continuar escrevendo no arquivo (ou incluindo informações)
fs.appendFileSync("arquivoteste.txt"," restante do teste");

// Utilizando pacote externo de super-heróis aleatórios 
const sh = require("superheroes")
console.log(sh.random())

//Trabalhar com datas 
const moment = require("moment")
const time = new Date();
const parsedTime = moment(time).format("h:mm:ss");

console.log(parsedTime)

// Express -> Framework Web 
const express = require("express")
const app = express()
app.get("/", (req, res) => {  
    res.send("hello world");
});
app.listen(4000, () =>{
    console.log("Server running on port 4000")
})

// Renderização de arquivos estáticos no Express (pag HTML, css etc..)
const path = require("path");
const app2 = new express();
app2.use(express.static(path.join(__dirname, "/public")))
app2.listen(3000, () =>{
    console.log("Server running on port 3000")
})

// Renderização de arquivos dinâmicos no Express
const hbs = require("hbs")
const app3 = express()
app3.set("view engine", "hbs")
app3.set("views", path.join(__dirname,"/views"))
app3.get("/", (req, res) =>{
    res.render("index",{
        autor: "Felipe Martins"
    });
});
app3.listen(5000, () =>{
    console.log("Server running on port 5000")
});

// Criação de modelos avançados com handlebars 
const app4 = express()
app4.set("view engine", "hbs")
app4.set("views", path.join(__dirname, "/templates/views"))
hbs.registerPartials(path.join(__dirname, "/templates/partials"))
app4.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
        name: "Felipe Martins"
    });
});
app4.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        name: "Thiago Chaves"
    })
})
app4.listen(5001, () => {
    console.log("Server running on port 5001")
})


