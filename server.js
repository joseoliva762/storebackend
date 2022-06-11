const express = require('express');
const apiRouter = require('./api/api.router');
const middlewares = require('./middlewares');
const { handleError, logError } = require('./api/middlewares/handleError.middleware');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// middlewares
middlewares.setup(app);

app.get('/', (req, res) => {
  res.json({ message: 'server [ON]' });
});

// routes
app.use('/api', apiRouter.router);

// error handling
app.use(logError);
app.use(handleError);

// start server
app.listen(port);
