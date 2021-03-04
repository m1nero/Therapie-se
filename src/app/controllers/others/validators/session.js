const Profissional = require('../../../models/Profissional');
const { compare } = require('bcryptjs');

module.exports = {
    async login(req, res, next) {
        const { email, senha } = req.body;

        const profissional = await Profissional.findOne({where: { email: email }});

        if (!profissional) return res.render('unauthorized'); //user not found

        const passed = await compare(senha, profissional.senha);

        if(!passed) return res.render('unauthorized'); //senha incorreta

        req.profissional = profissional;
        next();
    }
}