const db = require('../db');
const bcrypt = require('bcrypt');

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
    };

    static async authenticate(username, password) {
        const result = await db.query(
            `SELECT * FROM users
            WHERE username = $1`,
            [username],
        );

        const user = result.rows[0]
        if(user) {
            const isValid = await bcrypt.compare(password, user.password)

            if(isValid) {
                return user;
            }
        };
        return console.log('Invalid username/password');
    };
}


module.exports = User;