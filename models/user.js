const db = require('../db');

class User {

    // return all users
    static async findAll() {
        const result = await db.query(
            `SELECT * FROM users;`
        );

        return result.rows;
    };

    // return user matching query param
    static async findUser(username) {
        const result = await db.query(
            `SELECT * FROM users
            WHERE username = $1`,
            [username],
        );

        const user = result.rows[0]
        if(user) {
            return user;
        };
        return console.log('User not found');
    }
}


module.exports = User;