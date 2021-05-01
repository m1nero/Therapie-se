const Profissional = require('../models/Profissional');
const crypt = require('crypto');
const mailer = require('../../config/mailer');
const { hash } = require('bcryptjs');

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
        
        try {
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
            }, { where: { id: profissional.id }});

            await mailer.sendMail({
                to: profissional.email,
                from: 'no-reply@therapiese.com.br',
                subject: 'Recuperação de senha',
                html: `<html>
                    <head></head>
                    <body>
                        <h1>Recupere sua senha, ${profissional.nome}</h1
                        <br/>

                        Esse é o seu código para recuperar sua senha:
                        <h2>${token}</h2>


                        <h3>Acesse aqui a página para recuperar a senha 
                        <a href="http://localhost:3000/reset-senha?token=${token}" target="_blank">Clique aqui </a>
                        </h3>
                        <p> Não compartilhe esse código com ninguém</p>
                        <p>Esse é um email automático, por favor não responda</p>
                    </body>
                </html>,`
            });

            return res.render('sucesso', {
                page: {
                    name: "Email"
                }
            });
        } catch (error) {
            return res.render('unauthorized', {
                page: {
                    name: "Erro"
                }
            });
        }
    },

    resetForm(req, res) {
        return res.render('reset_senha', {
            token: req.query.token
        });
    },

    async reset(req, res){
        const profissional = req.profissional;
        const { senha, token } = req.body;

        try {
            const newSenha = await hash(senha, 8);

            await Profissional.update({
                senha: newSenha,
                reset_token: "",
                reset_token_expires: "",
            }, { where: { id: profissional.id }});

            return res.render('sucesso', {
                page: {
                    name: "Senha"
                }
            });

        } catch (err) {
            return res.render('unauthorized', {
                page: {
                    name: "Erro"
                }
            });
        }
    },

    entrar(req, res) {
        req.session.profissionalId = req.profissional.id;
        let id = req.profissional.id;
        return res.redirect('/meu-perfil');
    }
}