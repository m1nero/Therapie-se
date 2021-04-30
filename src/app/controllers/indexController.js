const Profissional = require('../models/Profissional');
const crypt = require('crypto');
const mailer = require('../../config/mailer');

module.exports = {
    index(req, res) {
        return res.render('start');
    },

    login(req, res) {
        return res.render('login');
    },

    logout(req, res) {
        req.session.destroy();
        return res.redirect('/');
    },

    esqueci(req, res) {
        return res.render('esqueci_senha');
    },

    async esqueciPost(req, res) {
        const profissional = req.profissional;
        console.log('bbb')

        const token = crypt.randomBytes(20).toString("hex");

        let now = new Date();
        now = now.setHours(now.getHours() + 1);

        await Profissional.update({
            nome: profissional.nome,
            email: profissional.email,
            crp_cnpj: profissional.crp_cnpj,
            senha: profissional.senha,
            telefone: profissional.telefone,
            endereco: profissional.endereco,
            url: profissional.url,
            cep: profissional.cep,
            cidade: profissional.cidade,
            estado: profissional.estado,
            reset_token: token,
            reset_token_expires: now
            }, { where: { id: profissional.id }}
        );

        await mailer.sendMail({
            to: profissional.email,
            from: 'no-reply@therapiese.com.br',
            subject: 'Recuperação de senha',
            html: `<h2>Perdeu a chave?<h2>
            <p>Não se preucupe, clique no link abaixo para recuperar sua senha</p>
            <p>
                <a href="http://localhost:3000/esqueci-senha?token=${token}" target="_blank">
                    RECUPERAR SENHA
                </a>
            </p>`
        });

        return res.render('esqueci_senha')
    },

    entrar(req, res) {
        req.session.profissionalId = req.profissional.id;
        let id = req.profissional.id;
        return res.redirect('/meu-perfil');
    }
}