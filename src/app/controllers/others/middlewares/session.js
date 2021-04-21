function onlyUsers (req, res, next) {
    if (!req.session.profissionalId)
        return res.redirect('/login');
    next();
}

function isLoggedRedirectToMeuPerfil(req, res, next) {
    if (req.session.profissionalId) {
        return res.redirect(`/meu-perfil`); //redireciona pra tela nova meu perfil
    }
    next();
}

module.exports = {
    onlyUsers,
    isLoggedRedirectToMeuPerfil
}