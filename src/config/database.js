module.exports = {
    username: 'root',
    password: '',
    database: 'therapie',
    host: '127.0.0.1', //colocar ip da maquina propria usar variavel de ambiente ip
    dialect: 'mysql',
    define: {
        timestamp: true,
        underscored: true,
    },
}