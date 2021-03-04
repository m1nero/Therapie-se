const { Model, DataTypes } = require('sequelize');

class Session extends Model {
    static init(sequelize) { //recebe a conexao com o sequelize
        super.init({
            sid: DataTypes.TEXT,
            data: DataTypes.TEXT,
            expires: DataTypes.DATE,
        },

        {
            sequelize,
            modelName: 'session'
        });
    }
}

module.exports = Session;