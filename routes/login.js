const loginRouter = require('express').Router();
const pool = require('../config/db')
const session = require("express-session");
const store = new session.MemoryStore();

loginRouter.post('/', (req, res) => {
    const { username, password } = req.body
    if (username && password) {
        pool.query(`Select * FROM users WHERE username = ${username} AND password = ${password}`, [username, password], function (error, results) {
            if (error) throw error;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/')
            } else {
                res.send('Incorrect username/ and password combination')
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});



module.exports = loginRouter;


