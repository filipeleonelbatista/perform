const express = require('express');

const ContatoController = require('./controllers/ContatoController.js');
const UsersController = require('./controllers/UsersController.js');

const routes = express.Router();

routes.get("/api/v1/", (request, response) => {
    return response.json({ message: "OK!" });
});

routes.post('/api/v1/contatos', ContatoController.create);
routes.get('/api/v1/contatos', ContatoController.index);
routes.get('/api/v1/contatos/:id', ContatoController.show);
routes.delete('/api/v1/contatos/:id', ContatoController.delete);
routes.put('/api/v1/contatos/:id', ContatoController.update);

routes.post('/api/v1/usuarios', UsersController.create);
routes.get('/api/v1/usuarios', UsersController.index);
routes.get('/api/v1/usuarios/:id', UsersController.show);
routes.delete('/api/v1/usuarios/:id', UsersController.delete);
routes.put('/api/v1/usuarios/:id', UsersController.update);

routes.get('/api/v1/login', UsersController.login);
routes.get('/api/v1/loginValidate', UsersController.loginValidate);

module.exports = routes;