const express = require('express');
const {ACCESS_TOKEN_SECRET} = require("../config");
const User = require("../models/user")
const { users } = require('../mocks')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');



// router.post('/token', async (req, res) => {
//     const { username, password } = req.body;
//     const payload = { username: username, password: password };

//     const user = users.filter(user => {
//         return user.username === username
//     })

//     if (user[0]) {
//         const isValid = await bcrypt.compare(password, user[0].password);

//         if (isValid) {
//             const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET);
//             return res.json({ token: accessToken });
//         }
//     }
//     return res.send('Invalid username/password');
// })

router.post('/token', async (req, res) => {  
    try {
        const { username, password } = req.body;
        const user = await User.authenticate(username, password);
        const payload = { username: user.username, password: user.password };
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET);

        return res.json({ token: accessToken});
    } catch {
        return res.send('Invalid username/password');
    }
})

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: uuid(),
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        return res.json(users);
    } catch {
        return res.send('User registration failed');
    }
})

module.exports = router;