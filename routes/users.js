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
    console.log("test")
    pool.query('Select * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
           return res.status(500).json({
               message: error.message
           });
        }
        return res.status(200).json(results);
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

userRouter.put('/:id', (req,res) => {
    const id = req.params.id
    const {firstName, lastName, password, username} = req.body

    pool.query(
        `Update users SET first_name = ${firstName}, last_name = ${lastName}, password = ${password}, username = ${username} WHERE id = ${id}`,
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )

})

userRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    pool.query(`DELETE FROM users WHERE id = ${id}`, (error,results) => {
        if (error){
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
})

module.exports = userRouter;