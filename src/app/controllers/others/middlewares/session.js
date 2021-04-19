function onlyUsers (req, res, next) {
    if (!req.session.profissionalId)
        return res.redirect('/login');
    next();
}

function isLoggedRedirectToMaterial(req, res, next) {
    if (req.session.profissionalId)
        return res.redirect(`/profissional/edit/${req.session.profissionalId}`); //redireciona pra tela nova meu perfil
    next();
}

module.exports = {
    onlyUsers,
    isLoggedRedirectToMaterial
}