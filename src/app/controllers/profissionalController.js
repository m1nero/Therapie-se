const { hash } = require('bcryptjs');
const { profissionalExists } = require('../controllers/others/services/profissionalServices');
const Profissional = require('../models/Profissional');
const Material = require('../models/Material');

module.exports = {
    async meuPerfil(req, res) {
        const profissional = await Profissional.findByPk(req.session.profissionalId);

        res.render('profissional/meu_perfil', {
            page: {
                name: "Meu Perfil",
                user: "Profissional"
            },
            profissional
        });
    },

    create(req, res) {
        res.render('profissional/form', {
            page: {
                name: "Adicionar",
                user: "Profissional"
            }
        });
    },

    async store(req, res) {
        let { nome, email, bio, crp_cnpj, senha, telefone, endereco, numero, url, cep, cidade, estado } = req.body;
        let senhaHash = await hash(senha, 12);
        senha = senhaHash;

        var exist = await profissionalExists(email);
        if (exist == 0) {
            await Profissional.create({ nome, email, bio, crp_cnpj, senha, telefone, endereco, numero, url, cep, cidade, estado });
        } else {
            return res.render('unauthorized', {
                page: {
                    name: "Ja cadastrado"
                }
            });
        }

        return res.redirect('/login');
    },

    async edit(req, res) {
        const profissional = await Profissional.findByPk(req.session.profissionalId);

        res.render('profissional/form', {
            page: {
                name: "Editar",
                user: "Profissional"
            },
            profissional
        });
    },

    async update(req, res) {
        let { nome, email, bio, crp_cnpj, senha, telefone, endereco, numero, url, cep, cidade, estado } = req.body;
        let senhaHash = await hash(senha, 12);
        senha = senhaHash;

        await Profissional.update({
            nome: nome,
            email: email,
            bio, bio,
            crp_cnpj: crp_cnpj,
            senha: senha,
            telefone: telefone,
            endereco: endereco,
            numero, numero,
            url: url,
            cep: cep,
            cidade: cidade,
            estado: estado,
            reset_token: "",
            reset_token_expires: ""
            }, { where: { id: req.session.profissionalId }}
        )
        return res.redirect('/meu-perfil');
    },

    async delete(req, res) {
        const profissional = await Profissional.findByPk(req.session.profissionalId);

        if(!profissional) {
            return res.status(400).json({error: 'Profissional not found'});
        }

        Profissional.destroy({ where: { id: req.session.profissionalId } });

        req.session.destroy();

        return res.render('start');
    },

    async textos(req, res) {
        const materiais = await Material.findAll({
            where: {
                profissional_id: req.session.profissionalId
            }
        });

        return res.render('profissional/material/textos', {
            page: {
                name: 'Material de Apoio',
                user: "Profissional",
                type: 'texto'
            },
            materiais
        });
    },

    async imagens(req, res) {
        const materiais = await Material.findAll({
            where: {
                profissional_id: req.session.profissionalId
            }
        });

        return res.render('profissional/material/imagens', {
            page: {
                name: 'Material de Apoio',
                user: "Profissional",
                type: 'imagem'
            },
            materiais
        });
    },

    async videos(req, res) {
        const materiais = await Material.findAll({
            where: {
                profissional_id: req.session.profissionalId
            }
        });

        return res.render('profissional/material/videos', {
            page: {
                name: 'Material de Apoio',
                user: "Profissional",
                type: 'video'
            },
            materiais
        });
    },
};