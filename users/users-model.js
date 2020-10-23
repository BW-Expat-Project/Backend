const express = require("express");
const db = require("../database/connection");

module.exports = {
    getUsers,
    findUserById,
    findPostsByUserId,
    addPost,
    add,
    findBy
};

function getUsers() {
    return db("users")
        .select("id", "username", "email", "first_name", "last_name")
        .from("users");
};


function findUserById(id) {
    return db("users")
        .select("id", "username", "email", "first_name", "last_name")
        .from("users")
        .where("id", "=", id)
        .first();
};

function findPostById(id) {
    return db("posts")
        .where("id", "=", id)
        .first();
};

function findPostsByUserId(id) {
    return db("posts")
        .where("user_id", "=", id);
};

function addPost(post) {
    return db("posts")
        .insert(post)
        .then(id => {
            return findPostById(id);
        });
};

async function add(user) {
    try {
      const [id] = await db("users").insert(user, "id");
  
      return findUserById(id);
    } catch (error) {
      throw error;
    };
};

function findBy(filter) {
    return db("users as u")
        .where(filter)
        .select("u.id", "u.username", "u.password")
        .orderBy("u.id");
};


