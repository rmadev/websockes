var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {res.sendFile(__dirname + '/step1.html');});
app.get('/step1.html', function (req, res) {res.sendFile(__dirname + '/step1.html');});
app.get('/step2.html', function (req, res) {res.sendFile(__dirname + '/step2.html');});

app.get('/converse.css', function (req, res) {res.sendFile(__dirname + '/converse.css');});
app.get('/converse.min.js', function (req, res) {res.sendFile(__dirname + '/converse.min.js');});
app.get('/fonticons/fonts/icomoon.woff', function (req, res) {res.sendFile(__dirname + '/icomoon.woff');});

app.get('/bg1.png', function (req, res) {res.sendFile(__dirname + '/bg1.png');});
app.get('/bg2.png', function (req, res) {res.sendFile(__dirname + '/bg2.png');});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

