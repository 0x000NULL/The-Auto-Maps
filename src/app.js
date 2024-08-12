const express = require('express');
const pino = require('pino');
const carsRouter = require('./routes/cars');
const path = require('path');

const app = express();
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use('/api/cars', carsRouter);

// Landing page route
app.get('/', (req, res) => {
  res.render('index', { title: 'Car Marketplace', message: 'Welcome to the Car Marketplace!' });
});

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).send('Internal Server Error');
});

module.exports = app;
