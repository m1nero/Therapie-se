const Profissional = require('../../../models/Profissional')

module.exports = {
    async profissionalExists(email) {
        var profissional = await Profissional.findOne({ 
            where: { 
                email: email
            }
        });
        if(!profissional) {
            return 0;
        } else {
            return 1;
        }
    }
}