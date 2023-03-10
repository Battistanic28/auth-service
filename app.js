"use-strict";

const express = require('express')
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);


module.exports = app;