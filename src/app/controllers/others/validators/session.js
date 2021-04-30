const Profissional = require('../../../models/Profissional');
const { compare } = require('bcryptjs');

module.exports = {
    async login(req, res, next) {
        const { email, senha } = req.body;

        const profissional = await Profissional.findOne({where: { email: email }});

        if (!profissional) {
            return res.render('unauthorized', {
                page: {
                    name: 'Email',
                    type: 'Login'
                }
            }); //user não encontrado
        }
        const passed = await compare(senha, profissional.senha);

        if(!passed) {
            return res.render('unauthorized', {
                page: {
                    name: 'Senha'
                }
            }); //senha incorreta
        }

        req.profissional = profissional;
        next();
    },

    async esqueciSenha(req, res, next) {
        const { email } = req.body;
        console.log('aaa')
        try {
            let profissional = await Profissional.findOne({where: { email }});

            if (!profissional) {
                return res.render('unauthorized', {
                    page: {
                        name: 'Email',
                        type: 'Esqueci'
                    }
                }); //user não encontrado
            }

            req.profissional = profissional;

            next();
        } catch(err) {
            console.error(err);
        }
    }
}