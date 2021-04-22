const { hash } = require('bcryptjs');
const { profissionalExists } = require('../controllers/others/services/profissionalServices');
const Profissional = require('../models/Profissional');
const Material = require('../models/Material');

module.exports = {
    create(req, res) {
        res.render('profissional/form', {
            page: {
                name: "Adicionar",
                user: "Profissional"
            }
        });
    },

    async store(req, res) {
        let { nome, email, crp_cnpj, senha, telefone, endereco, url, cep, cidade, estado } = req.body;
        let senhaHash = await hash(senha, 12);
        senha = senhaHash;

        var exist = await profissionalExists(email, crp_cnpj);
        if (exist == 0) {
            await Profissional.create({ nome, email, crp_cnpj, senha, telefone, endereco, url, cep, cidade, estado });
        } else {
            return res.json('Email ja cadastrado');
        }

        return res.redirect('/login');
    },

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
        let { profissionalId } = req.params;
        let { nome, email, crp_cnpj, senha, telefone, endereco, url, cep, cidade, estado } = req.body;
        let senhaHash = await hash(senha, 12);
        senha = senhaHash;

        await Profissional.update({
            nome: req.body.nome,
            email: req.body.email,
            crp_cnpj: req.body.crp_cnpj,
            senha: senha,
            telefone: req.body.telefone,
            endereco: req.body.endereco,
            url: req.body.url,
            cep: req.body.cep,
            cidade: req.body.cidade,
            estado: req.body.estado
            },
            { where: { id: req.params.profissionalId }}
        )

        return res.redirect(`/profissional/edit/${profissionalId}`);
    },

    async delete(req, res) {
        const { profissionalId } = req.params;
        const profissional = await Profissional.findByPk(profissionalId);

        if(!profissional) {
            return res.status(400).json({error: 'Profissional not found'});
        }

        req.session.destroy();
        Profissional.destroy({
            where: {id: req.params.profissionalId}
        })

        return res.render('start');
    },

    async videos(req, res) {
        const materiais = await Material.findAll({
            where: {
                profissional_id: req.session.profissionalId
            }
        });

        return res.render('paciente/videos', {
            page: {
                name: 'Material de Apoio',
                user: "Profissional",
                type: 'videos'
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

        return res.render('paciente/imagens', {
            page: {
                name: 'Material de Apoio',
                user: "Profissional",
                type: 'imagens'
            },
            materiais
        });
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
                type: 'textos'
            },
            materiais
        });
    },
};