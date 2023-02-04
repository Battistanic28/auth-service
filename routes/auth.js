const express = require('express');
const {ACCESS_TOKEN_SECRET} = require("../config");
const { posts, users } = require('../mocks')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { uuid: uuidv4 } = require('uuid');



router.get('/users', (req, res) => {
    return res.json(users)
})

router.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
    return res.json({ token: accessToken });
})

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: uuid(),
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
    } catch {
        return res.send('User registration failed');
    }
    res.json(users);
})

module.exports = router;