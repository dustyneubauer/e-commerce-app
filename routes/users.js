const userRouter = require('express').Router();
const { response } = require('express');
const pool = require('../config/db')

userRouter.post('/', (req, res) => {
    const { firstName, lastName, password } = req.body

    pool.query(`INSERT INTO users (first_name, last_name, password) VALUES (${firstName}, ${lastName}, ${password})`)
    if (error) {
        throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`);
})

module.exports = userRouter;