const Profissional = require('../../../models/Profissional')

module.exports = {
    async profissionalExists(email, crp_cnpj) {
        var profissional = await Profissional.findOne({ 
            where: { 
                email: email,
                crp_cnpj: crp_cnpj
            }
        });
        if(!profissional) {
            return 0;
        } else {
            return 1;
        }
    }
}
