const Profissional = require('../models/Profissional');
const Material = require('../models/Material');

module.exports = {
    async videos(req, res) {
        const materiais = await Material.findAll();

        return res.render('paciente/videos', {
            page: {
                name: 'Material de Apoio',
                user: "Paciente",
                type: 'videos'
            },
            materiais
        });
    },

    async imagens(req, res) {
        const materiais = await Material.findAll();

        return res.render('paciente/imagens', {
            page: {
                name: 'Material de Apoio',
                user: "Paciente",
                type: 'imagens'
            },
            materiais
        });
    },

    async textos(req, res) {
        const materiais = await Material.findAll();

        return res.render('paciente/textos', {
            page: {
                name: 'Material de Apoio',
                user: "Paciente",
                type: 'textos'
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