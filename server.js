
const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, function() {
    console.log(`Started on http://localhost:${PORT}`);
})

// require('dotenv').config()

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();

// app.use(express.json());

// const posts = [
//     {
//         username: 'Battistanic90',
//         title: 'Post 1',
//     },
//     {
//         username: 'Battistanic90',
//         title: 'Post 2',
//     },
// ]

// app.get('/posts', (req, res) => {
//     return res.json(posts)
// })

// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const user = { name: username };

//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//     return res.json({ token: accessToken });
// })

// app.listen(3000)