const path = require('path');

module.exports = {
    client: 'mysql',
    connection: {
        host: 'mysql742.umbler.com',
        port: 41890,
        user: 'performadmin',
        password: 'Pioneer47',
        database: 'perform_db'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};