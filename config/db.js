const Pool = require('pg').Pool;
require('dotenv').config();

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

console.log(DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER)

const pool = new Pool({
  DB_HOST: DB_HOST,
  DB_USER: DB_USER,
  DB_PASSWORD: DB_PASSWORD,
  DB_DATABASE: DB_DATABASE,
  DB_PORT: DB_PORT
})


module.exports = pool;
