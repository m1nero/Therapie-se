const express = require('express');
const routes = express.Router();

//test commit
const indexController = require('./app/controllers/indexController');
const pacienteController = require('./app/controllers/pacienteController');
const profissionalController = require('./app/controllers/profissionalController');
const materialController = require('./app/controllers/materialController');

const SessionValidator = require('./app/controllers/others/validators/session');

const { isLoggedRedirectToMeuPerfil, onlyUsers } = require('./app/controllers/others/middlewares/session');

routes.get('/', indexController.index); //escolha paciente ou profissional

routes.get('/login', isLoggedRedirectToMeuPerfil, profissionalController.login);
routes.post('/login', SessionValidator.login, profissionalController.entrar);
routes.post('/logout', profissionalController.logout);

routes.get('/registrar', profissionalController.create); //tela cadastra profissional
routes.post('/registrar', profissionalController.store); //grava profissional

routes.get('/meu-perfil', onlyUsers, profissionalController.meuPerfil); //pagina edit profissional
routes.get('/profissional/edit', onlyUsers, profissionalController.edit); //pagina edit profissional
routes.put('/profissional/edit/:profissionalId', onlyUsers, profissionalController.update); //update profissional
routes.delete('/profissional/delete/:profissionalId', onlyUsers, profissionalController.delete); //deleta profissional

routes.get('/material/list/:profissionalId', onlyUsers, materialController.materialList); //table list material
routes.get('/material/add/:profissionalId', onlyUsers, materialController.materialAdd); //pagina add material
routes.post('/material/add/:profissionalId', onlyUsers, materialController.store); //grava material

routes.get('/material/:materialId/edit/:profissionalId', onlyUsers, materialController.materialEdita); //pagina edit material
routes.put('/material/:materialId/edit/:profissionalId', onlyUsers, materialController.update); //update material
routes.delete('/material/delete/:materialId', onlyUsers, materialController.delete); //deleta material

routes.get('/materiais/:profissionalId', onlyUsers, profissionalController.material); //pagina edit material
routes.get('/profissionais/:profissionalId', onlyUsers, profissionalController.profissional); //pagina edit material

//Materiais Editar
routes.get('/editar/textos', onlyUsers, profissionalController.textos);
routes.get('/editar/imagens', onlyUsers, profissionalController.imagens);
routes.get('/editar/videos', onlyUsers, profissionalController.videos);

//Pacientes
routes.get('/textos', pacienteController.textos);
routes.get('/imagens', pacienteController.imagens);
routes.get('/videos', pacienteController.videos);
routes.get('/profissionais', pacienteController.profissionais);

module.exports = routes;