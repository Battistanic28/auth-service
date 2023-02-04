const express = require('express');
const {ACCESS_TOKEN_SECRET} = require("../config");
const posts = require('../mocks')
const router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/posts', (req, res) => {
    return res.json(posts)
})

router.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
    return res.json({ token: accessToken });
})

router.post('/register', (req, res) => {
    
})

module.exports = router;