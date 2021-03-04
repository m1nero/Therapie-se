const Profissional = require('../models/Profissional');
const Material = require('../models/Material');

module.exports = {
    async materiais(req, res) {
        const materiais = await Material.findAll();

        return res.render('paciente/materiais', {
            page: {
                name: 'Material de Apoio',
                user: "Paciente"
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
    }
}