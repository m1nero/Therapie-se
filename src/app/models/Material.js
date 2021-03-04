const { Model, DataTypes } = require('sequelize');

class Material extends Model {
    static init(sequelize) { //recebe a conexao com o sequelize
        super.init({
            url_imagem: DataTypes.TEXT,
            video_id: DataTypes.TEXT,
            txt_motivacional: DataTypes.TEXT,
            profissional_id: DataTypes.INTEGER,
        },

        {
            sequelize,
            modelName: 'materiais'
        });
    }

    static associate (models) {
        this.belongsTo(models.profissionais, {
          foreignKey: 'profissional_id',
          as: 'profissional'
        });
    }
}

module.exports = Material;