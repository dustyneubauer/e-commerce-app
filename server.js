const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
    cookieSession({
      name: "ecommerce-session",
      secret: "SUPER_SECRET_CODE", // should use as secret environment variable
      httpOnly: true
    })
  );

app.get('/', (request, response) => {
    response.json({ message: 'Welcome to my e-commerce store' })
  });

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
});