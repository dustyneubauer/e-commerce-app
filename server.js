const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
});