const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/login', controllers.login);
app.use('/controle', controllers.transferencias);


app.use((err, _req, res, _next) => {
  res.status(405).json({ err : err.message });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
