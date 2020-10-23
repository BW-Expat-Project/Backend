// const router = require("express").Router();
const express = require("express");

const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware");

const router = express.Router();


router.get("/", (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json({ message: "List of all users", users: users });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

router.get("/:id", (req, res) => {
    Users.findUserById(req.params.id)
        .then(user => {
            res.status(200).json({ message: "Found specific user", [user.username]: user });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

router.get("/:id/posts", (req, res) => {
    Users.findPostsByUserId(req.params.id)
        .then(posts => {
            res.status(200).json({ message: "All posts by specific user", posts: posts });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

router.post("/:id/posts", (req, res) => {
    const post = req.body;
    post.user_id = req.params.id;

    Users.addPost(post)
        .then(post => {
            res.status(201).json({ message: "Post created", post: post });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

module.exports = router;