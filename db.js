
const { Client } = require("pg");

const DB_URI = 'postgresql:///auth_db';

const db = new Client({
    connectionString: DB_URI
});

db.connect();

module.exports = db;