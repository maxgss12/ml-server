const express = require('express');
const morgan = require('morgan');

const app = express();

var cors = require('cors');

// Set up a whitelist and check against it:
var whitelist = ['http://localhost:3000', 'http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

// settigns
app.set('port', process.env.port || 3001);
app.set('json spaces', 2);

// routes
app.use(require('./routes/routes-index'));
app.use('/api/items', require('./routes/items'));

// Middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const port = app.get('port');
// Starting the server
app.listen(port, () => {
    console.log('server ready on', port);
});
