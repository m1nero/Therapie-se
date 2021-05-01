const { Model, DataTypes } = require('sequelize');

class Profissional extends Model {
    static init(sequelize) { //recebe a conexao com o sequelize
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            crp_cnpj: DataTypes.STRING,
            senha: DataTypes.STRING,
            telefone: DataTypes.STRING,
            endereco: DataTypes.TEXT,
            url: DataTypes.TEXT,
            cep: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            reset_token: DataTypes.TEXT,
            reset_token_expires: DataTypes.TEXT,
        },

        {
            sequelize,
            modelName: 'profissionais'
        });
    }
}

module.exports = Profissional;