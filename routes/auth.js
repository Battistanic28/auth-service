const express = require('express');
const {ACCESS_TOKEN_SECRET} = require("../config");
const User = require("../models/user")
const { users } = require('../mocks')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


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
        const newUser = await User.register({ ...req.body });
        return res.status(201).json({ newUser });
    } catch {
        return res.send('User registration failed');
    }
})

module.exports = router;