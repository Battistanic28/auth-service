const express = require('express');
const {ACCESS_TOKEN_SECRET} = require("../config");
const { users } = require('../mocks')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');



router.get('/users', (req, res) => {
    return res.json(users)
})

router.post('/token', async (req, res) => {
    const username = await req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
    return res.json({ token: accessToken });
})

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword);
        users.push({
            id: uuid(),
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        return res.json(users);
    } catch {
        return res.send('User registration failed');
    }
})

module.exports = router;