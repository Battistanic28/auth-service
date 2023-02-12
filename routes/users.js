const express = require('express');
const { users } = require('../mocks')
const router = express.Router();
const User = require('../models/user');


// Mocked route
router.get('/', (req, res) => {
    return res.json(users)
})

router.get('/db', async (req, res) => {
    try {
        const user = await User.findAll();
        return res.json({ user });
    } catch {
        res.send('Could not fetch users');
    }
})

router.get('/:username', async (req, res) => {
    try {
        const user = await User.findUser(req.params.username);
        return res.json({ user });
    } catch {
        res.send(`Could not fetch user: ${username}`);
    }
})


module.exports = router;