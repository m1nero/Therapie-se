function onlyUsers (req, res, next) {
    if (!req.session.profissionalId)
        return res.redirect('/login');
    next();
}

function isLoggedRedirectToMeuPerfil(req, res, next) {
    if (req.session.profissionalId) {
        return res.redirect(`/profissional/edit`); //redireciona pra tela nova meu perfil
    }
    next();
}

module.exports = {
    onlyUsers,
    isLoggedRedirectToMeuPerfil
}