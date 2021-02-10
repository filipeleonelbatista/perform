const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const routes = require("./src/routes");

const configs = {
    caminho: path.join("project","out"), //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
    forcarHTTPS: true, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
    port: process.env.PORT || 3333
}

if (configs.forcarHTTPS) //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
    app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
        if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
            res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
        else //Se a requisição já é HTTPS
            next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
    });

app.use(express.static(path.join(__dirname, configs.caminho))); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

// Admin area
app.use(express.static(path.join(__dirname, "admin", "build"))); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});
app.get("/links", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "links.html"));
});
app.get("/sobre-nos", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "sobre-nos.html"));
});
app.get("/marketing-digital", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "marketing-digital.html"));
});

//Admin area
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "build", "index.html"));
});
app.get("/admin/*", (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "build", "index.html"));
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(configs.port, () => {
    console.log(`Servidor iniciado em http://localhost:${configs.port}`);
});