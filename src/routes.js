const express = require('express');
const routes = express.Router();

//test commit
const indexController = require('./app/controllers/indexController');
const pacienteController = require('./app/controllers/pacienteController');
const profissionalController = require('./app/controllers/profissionalController');
const materialController = require('./app/controllers/materialController');

const SessionValidator = require('./app/controllers/others/validators/session');

const { isLoggedRedirectToMeuPerfil, onlyUsers } = require('./app/controllers/others/middlewares/session');

//Index
routes.get('/', indexController.index); //escolha paciente ou profissional
routes.get('/login', isLoggedRedirectToMeuPerfil, indexController.login); //mostra tela de login
routes.post('/login', SessionValidator.login, indexController.entrar); //envia email e senha
routes.post('/logout', indexController.logout); //deleta sesion, logout

//Profissional Add
routes.get('/registrar', profissionalController.create); //tela cadastra profissional
routes.post('/registrar', profissionalController.store); //grava profissional

//Profissional Editar
routes.get('/profissional/edit', onlyUsers, profissionalController.edit); //pagina edit profissional
routes.put('/profissional/edit', onlyUsers, profissionalController.update); //update profissional
routes.delete('/profissional/delete', onlyUsers, profissionalController.delete); //deleta profissional

routes.get('/meu-perfil', onlyUsers, profissionalController.meuPerfil); //pagina edit profissional

//Materiais Get
routes.get('/texto/edit', onlyUsers, profissionalController.textos);
routes.get('/imagem/edit', onlyUsers, profissionalController.imagens);
routes.get('/video/edit', onlyUsers, profissionalController.videos);

//Materiais Add
routes.get('/texto/add', onlyUsers, materialController.textoAdd); //pagina add texto
routes.post('/texto/add', onlyUsers, materialController.textoStore); //grava texto

//Materiais Editar 
routes.get('/texto/edit/:materialId', onlyUsers, materialController.textoEdit); //pagina edit texto
routes.get('/imagem/edit/:materialId', onlyUsers, profissionalController.imagens); //form
routes.get('/video/edit/:materialId', onlyUsers, profissionalController.videos); //form

//Materiais Delete
routes.get('/texto/delete/:materialId', onlyUsers, profissionalController.textos); //form
routes.get('/imagem/delete/:materialId', onlyUsers, profissionalController.imagens); //form
routes.get('/video/delete/:materialId', onlyUsers, profissionalController.videos); //form

//Pacientes
routes.get('/textos', pacienteController.textos);
routes.get('/imagens', pacienteController.imagens);
routes.get('/videos', pacienteController.videos);
routes.get('/profissionais', pacienteController.profissionais);
routes.get('/ver-perfil/:profissionalId', pacienteController.verPerfil);

module.exports = routes;