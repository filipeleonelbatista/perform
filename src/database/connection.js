
const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: 'mysql742.umbler.com',
        port: 41890,
        user: 'performadmin',
        password: 'Pioneer47',
        database: 'perform_db'
    }
});

module.exports = db;