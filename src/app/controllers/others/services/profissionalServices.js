const Profissional = require('../../../models/Profissional')

module.exports = {
    async profissionalExists(email, crp) {
        var profissional = await Profissional.findOne({ 
            where: { 
                email: email,
                crp: crp
            }
        });
        if(!profissional) {
            return 0;
        } else {
            return 1;
        }
    }
}