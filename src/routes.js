const express = require('express');
const routes = express.Router();

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
routes.get('/esqueci-senha', indexController.esqueci); //deleta sesion, logout

//Profissional Add
routes.get('/registrar', profissionalController.create); //tela cadastra profissional
routes.post('/registrar', profissionalController.store); //grava profissional

routes.get('/meu-perfil', onlyUsers, profissionalController.meuPerfil); //pagina edit profissional

//Profissional Editar
routes.get('/profissional/edit', onlyUsers, profissionalController.edit); //pagina edit profissional
routes.put('/profissional/edit', onlyUsers, profissionalController.update); //update profissional
routes.delete('/profissional/delete', onlyUsers, profissionalController.delete); //deleta profissional

//Materiais Get
routes.get('/texto/edit', onlyUsers, profissionalController.textos);
routes.get('/imagem/edit', onlyUsers, profissionalController.imagens);
routes.get('/video/edit', onlyUsers, profissionalController.videos);

//Materiais Add
routes.get('/texto/add', onlyUsers, materialController.textoAdd); //pagina add texto
routes.post('/texto/add', onlyUsers, materialController.textoStore); //grava texto

routes.get('/imagem/add', onlyUsers, materialController.imagemAdd); //pagina add imagem
routes.post('/imagem/add', onlyUsers, materialController.imagemStore); //grava imagem

routes.get('/video/add', onlyUsers, materialController.videoAdd); //pagina add video
routes.post('/video/add', onlyUsers, materialController.videoStore); //grava video

//Materiais Editar 
routes.get('/texto/edit/:materialId', onlyUsers, materialController.textoEdit); //pagina edit texto
routes.put('/texto/edit/:materialId', onlyUsers, materialController.textoUpdate); //update texto
routes.delete('/texto/delete/:materialId', onlyUsers, materialController.textoDelete); //delete texto

routes.get('/imagem/edit/:materialId', onlyUsers, materialController.imagemEdit); //pagina edit imagem
routes.put('/imagem/edit/:materialId', onlyUsers, materialController.imagemUpdate); //update imagem
routes.delete('/imagem/delete/:materialId', onlyUsers, materialController.imagemDelete); //delete imagem

routes.get('/video/edit/:materialId', onlyUsers, materialController.videoEdit); //pagina edit video
routes.put('/video/edit/:materialId', onlyUsers, materialController.videoUpdate); //update video
routes.delete('/video/delete/:materialId', onlyUsers, materialController.videoDelete); //delete video

//Pacientes
routes.get('/textos', pacienteController.textos);
routes.get('/imagens', pacienteController.imagens);
routes.get('/videos', pacienteController.videos);
routes.get('/profissionais', pacienteController.profissionais);
routes.get('/ver-perfil/:profissionalId', pacienteController.verPerfil);
routes.get('/cvv', pacienteController.cvv);
routes.get('/protecao-a-vida', pacienteController.protecaoVida);

module.exports = routes;