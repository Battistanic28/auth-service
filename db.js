
const { Client } = require("pg");

const db = new Client({
    host: 'localhost',
    user: 'nick',
    port: 5432,
    password: 'rootUser',
    database: 'auth_db',
});

db.connect();

module.exports = db;