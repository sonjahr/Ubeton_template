var express = require('express')
var app = express()


app.get('/:name', function (req, res) {  
  res.send("Hello " + req.params.name);
})

/**
 * All errors will be redirected here
 */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Sorry, but something broke!');
})

module.exports = app;