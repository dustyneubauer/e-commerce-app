const express = require('express');
const apiRouter = express.Router();
const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home')

apiRouter.use('/users', userRouter)
apiRouter.use('/login', loginRouter)
apiRouter.use('/home', homeRouter)

module.exports = apiRouter;