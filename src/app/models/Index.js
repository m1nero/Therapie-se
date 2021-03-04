const Sequelize = require('sequelize');
const config = require('../../config/database');

const Profissional = require('../models/Profissional');
const Session = require('../models/Session');
const Material = require('../models/Material');

const sequelize = new Sequelize(config);

Profissional.init(sequelize);
Session.init(sequelize);
Material.init(sequelize);

Material.associate(sequelize.models);

module.exports = sequelize;