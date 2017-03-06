const express = require('express');
const morgan = require('express');

const app = express();

app.use(morgan('dev'));

const port = 3000;

app.listen(port, () => {
  console.log('I am listening on port 3000');
});
