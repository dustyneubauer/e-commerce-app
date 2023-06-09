require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api');
const path = require('path');

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api', apiRouter);

app.use(
    cookieSession({
      name: "ecommerce-session",
      secret: "SUPER_SECRET_CODE", // should use as secret environment variable
      httpOnly: true
    })
  );

  app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});


app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
});