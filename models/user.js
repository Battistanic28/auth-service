const db = require('../db');
const bcrypt = require('bcrypt');

// TODO: move bcrypt work factor to config variable
// TODO: replace console logs with proper error handling

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

    static async register( { username, email, password }) {
        const duplicateCheck = await db.query(
            `SELECT * FROM users
            WHERE username =$1`,
            [username]
            );
            
        if (duplicateCheck.rows[0]) {
            console.log(`Username ${username} already exists`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await db.query(
            `INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING username, email, password`,
            [username, email, hashedPassword],
        );

        const user = result.rows[0];
        console.log(user);
        return user;
    }
}


module.exports = User;