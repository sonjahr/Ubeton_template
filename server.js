var app = require('./app');
const port = 8080;

const server = app.listen(port, function () {
  console.log('Listening on port ' + port +'...');
});

module.exports = server;