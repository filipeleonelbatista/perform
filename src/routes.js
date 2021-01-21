const express = require('express');

const ContatoController = require('./controllers/ContatoController.js');

const routes = express.Router();

routes.get("/api/v1/", (request, response) => {
    return response.json({ message: "OK!" });
});

routes.post('/api/v1/contato', ContatoController.create);
routes.get('/api/v1/contato', ContatoController.index);

module.exports = routes;