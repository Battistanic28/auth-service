const express = require('express');
const { users } = require('../mocks')
const router = express.Router();


router.get('/', (req, res) => {
    return res.json(users)
})

module.exports = router;