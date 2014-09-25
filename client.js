var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/c.html');
});

app.get('/pconverse.min.css', function (req, res) {
  res.sendFile(__dirname + '/public/converse.min.css');
});

app.get('/pconverse.min.js', function (req, res) {
  res.sendFile(__dirname + '/public/converse.min.js');
});

app.get('/fonticons/fonts/icomoon.woff', function (req, res) {
  res.sendFile(__dirname + '/public/icomoon.woff');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

