// requiring all needed modules
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// mounting middleware  for environmental variables and secrets
require('dotenv').config();
// connecting to the database from our server
require('./config/database');

// creating the express app
const app = express();

/**  mounting the morgan & JSON middleware to 
log dev results and process JSON data respectively */
app.use(logger('dev'));
app.use(express.json());

/** mounting and configuring both serve-favicon & static middleware
to serve from production 'build' folder */
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/** configuring the backend to use port 3001 to avoid collision with 
with react's dev server on port 3000 */
const port = process.env.PORT || 3001;

/** configuring the Express app to liston for http request */
app.listen(port, function () {
	console.log(`Express app running on port ${port}`);
});

// All API routes here, before the "catch all" route goes here

/** Defining a route to "catch all" non-AJAX request and serve up the index.html page 
Note: the * is necessary to return the index.html on all non-AJAX requests */
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
