
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken"); 

// const router = require("express").Router();
const config = require("../api/config");

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service");


const router = express.Router();


router.post("/signup", (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;

        const hash = bcryptjs.hashSync(credentials.password, rounds);

        credentials.password = hash;

        Users.add(credentials)
            .then(user => {
                res.status(201).json({ message: "User registerd", data: user });
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "Please enter the credentials correctly",
        });
    };
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (isValid(req.body)) {
        Users.findBy({ username })
            .then(([user]) => {
                if (user && bcryptjs.compareSync(password, user.password)) {
                    const token = getJwt(user);

                    res.status(200).json({ message: "Successful login", token });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({ message: "Please enter the credentials correctly" });
    };
});

function getJwt(user) {
    const payload = {
        username: user.username,
        id: user.id
    };

    const jwtOptions = {
        expiresIn: "8h",
    };

    return jwt.sign(payload, config.jwtSecret, jwtOptions);
};

module.exports = router;