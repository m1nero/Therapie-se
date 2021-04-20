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

    entrar(req, res) {
        req.session.profissionalId = req.profissional.id;
        let id = req.profissional.id;
        return res.redirect(`/profissional/edit`); ///
    }
}