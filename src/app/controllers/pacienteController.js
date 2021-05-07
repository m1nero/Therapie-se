const Profissional = require('../models/Profissional');
const Material = require('../models/Material');

module.exports = {
    async cvv(req, res) {
        return res.render('paciente/cvv', {
            page: {
                name: 'Ajuda',
                user: "Paciente",
                type: 'cvv'
            },
        });
    },

    async protecaoVida(req, res) {
        return res.render('paciente/protecao', {
            page: {
                name: 'Ajuda',
                user: "Paciente",
                type: 'protecaoVida'
            },
        });
    },

    async videos(req, res) {
        const materiais = await Material.findAll();

        return res.render('paciente/material/videos', {
            page: {
                name: 'Material de Apoio',
                user: "Paciente",
                type: 'video'
            },
            materiais
        });
    },

    async imagens(req, res) {
        const materiais = await Material.findAll();

        return res.render('paciente/material/imagens', {
            page: {
                name: 'Material de Apoio',
                user: "Paciente",
                type: 'imagem'
            },
            materiais
        });
    },

    async textos(req, res) {
        const materiais = await Material.findAll();

        return res.render('paciente/material/textos', {
            page: {
                name: 'Material de Apoio',
                user: "Paciente",
                type: 'texto'
            },
            materiais
        });
    },

    async profissionais(req, res){
        const profissionais = await Profissional.findAll();

        return res.render('paciente/profissionais', {
            page: {
                name: 'Profissionais e Clínicas',
                user: "Paciente"
            },
            profissionais
        });
    },

    async verPerfil(req, res){
        const { profissionalId } = req.params;
        const profissional = await Profissional.findByPk(profissionalId);

        return res.render('paciente/ver_perfil', {
            page: {
                name: 'Profissionais e Clínicas',
                user: "Paciente"
            },
            profissional
        });
    },
}