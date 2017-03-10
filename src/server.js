const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// CONFIG
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, '/views/layouts/')}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// ROUTES
app.use('/', require('./routes/index'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('I am listening on port 3000');
});

module.exports = app;
