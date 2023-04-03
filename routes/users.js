const userRouter = require('express').Router();
const { response } = require('express');
const pool = require('../config/db')

userRouter.post('/', (req, res) => {
    const { firstName, lastName, password, username } = req.body
    console.log(firstName, lastName, password, username)
    pool.query(`INSERT INTO users (first_name, last_name, password, username) VALUES ('${firstName}', '${lastName}', '${password}', '${username}') RETURNING *`, (error,results) =>{
        if (error) {
            return res.status(500).json({
                message: error.message
            });
        }
        console.log(results.rows);
        response.status(201).send('User added');
    })
})

userRouter.get('/', (req,res) => {
    pool.query('Select * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
           return res.status(500).json({
               message: error.message
           });
        }
        return res.status(200).json(results.rows);
    })
})

userRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(`Select * FROM users WHERE id = ${id}`, (error, results) =>{
        if (error) {
            response.status(500).json(error);
        }
        response.status(200).json(results.rows);
    })
})

userRouter.put('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const {firstName, lastName, password, username} = req.body

    pool.query(
        `Update users SET first_name = '${firstName}', last_name = '${lastName}', password = '${password}', username = '${username}' WHERE id = '${id}'`,
        (error, results) => {
            if (error) {
                response.status(500).json(error);
            }
            response.status(200).send(`User modified with ID:'${id}'`)
        }
    )

})

userRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    pool.query(`DELETE FROM users WHERE id = '${id}'`, (error,results) => {
        if (error) {
            response.status(500).json(error);
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
})

module.exports = userRouter;