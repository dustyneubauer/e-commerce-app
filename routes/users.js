const userRouter = require('express').Router();
const { response } = require('express');
const pool = require('../config/db')

userRouter.post('/', (req, res) => {
    const { firstName, lastName, password, username } = req.body

    pool.query(`INSERT INTO users (first_name, last_name, password) VALUES (${firstName}, ${lastName}, ${password}, ${username})`)
    if (error) {
        throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`);
})

userRouter.get('/', (req,res) => {
    pool.query('Select * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            response.status(404).send();
        }
        response.status(200).json(results);
    })
})

userRouter.get('/:id', (req, res) => {
    const id = (req.params.id)

    pool.query(`Select * FROM users WHERE id = ${id}`, (error, results) =>{
        if (error) {
            response.status(400).json(results);
        }
        response.status(200).json(results);
    })
})

module.exports = userRouter;