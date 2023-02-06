const db = require('../db');

class User {

    static async findAll() {
        const result = await db.query(
            `SELECT * FROM users;`
        );

        return result.rows;
    }
}


module.exports = User;