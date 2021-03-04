function onlyUsers (req, res, next) {
    if (!req.session.profissionalId)
        return res.redirect('/login');
    next();
}

function isLoggedRedirectToMaterial(req, res, next) {
    if (req.session.profissionalId)
        return res.redirect(`/profissionais/${req.session.profissionalId}`);
    next();
}

module.exports = {
    onlyUsers,
    isLoggedRedirectToMaterial
}