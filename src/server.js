const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// CONFIG
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(morgan('dev'));

// ROUTES
app.use('/', require('./routes/index'));

const port = 3000;

app.listen(port, () => {
  console.log('I am listening on port 3000');
});
