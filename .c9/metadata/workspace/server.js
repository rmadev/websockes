{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"var http = require('http');\nhttp.createServer(function (req, res) {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello World\\n');\n}).listen(1337, '127.0.0.1');\n\n\n\nconsole.log('Server running at http://127.0.0.1:1337/');\n\nvar net = require('net');\n\nvar server = net.createServer(function (socket) {\n  socket.write('Echo server\\r\\n');\n  socket.pipe(socket);\n});\n\nserver.listen(1337, '127.0.0.1');","undoManager":{"mark":79,"position":95,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":26}},"text":"xpress"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":21}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":21},"end":{"row":0,"column":22}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":22},"end":{"row":0,"column":23}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":23}},"text":"http"},{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":23}},"text":"http"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":39},"end":{"row":0,"column":40}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":40},"end":{"row":0,"column":41}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":40},"end":{"row":0,"column":41}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":39},"end":{"row":0,"column":40}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":41},"end":{"row":1,"column":42}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":41},"end":{"row":1,"column":42}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":42},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":2},"end":{"row":2,"column":3}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":3},"end":{"row":2,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":4},"end":{"row":2,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":5},"end":{"row":2,"column":6}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":6},"end":{"row":2,"column":7}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":7},"end":{"row":2,"column":8}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":8},"end":{"row":2,"column":9}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":7},"end":{"row":2,"column":9}},"text":"re"},{"action":"insertText","range":{"start":{"row":2,"column":7},"end":{"row":2,"column":20}},"text":"require(\"fs\")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":20},"end":{"row":2,"column":21}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":41},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":3},"end":{"row":3,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":3},"end":{"row":2,"column":4}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":19,"column":0}},"nl":"\n","lines":["var app = require('http').createServer()","  , io = require('socket.io').listen(app)","  , fs = require(\"fs\");","  ","var port = process.env.PORT || 8001;","","app.listen(port);","","app.get('/', function (req, res) {","  res.sendfile(__dirname + '/index.html');","});","","","io.sockets.on('connection', function (socket) {","    // echo the message","    socket.on('message', function (data) {","        console.info(data);","        socket.send(\"[ECHO] \"+data);","    });"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":47}},"text":"var app = require('http').createServer(handler)"},{"action":"insertText","range":{"start":{"row":0,"column":47},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":25,"column":0}},"lines":[", io = require('socket.io').listen(app)",", fs = require('fs')","","app.listen(process.env.PORT || 8001);","","function handler (req, res) {","fs.readFile('index.html',","function (err, data) {","if (err) {","res.writeHead(500);","return res.end('Error loading index.html');","}","","res.writeHead(200, {'Content-Type': 'text/html', \"Content-Length\": data.length});","res.end(data);","});","}","","io.sockets.on('connection', function (socket) {","// echo the message","socket.on('message', function (data) {","console.info(data);","socket.send(\"[ECHO] \"+data);","});"]},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":34},"end":{"row":4,"column":35}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":34},"end":{"row":4,"column":35}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":34},"end":{"row":4,"column":35}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":34},"end":{"row":4,"column":35}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":25,"column":0}},"nl":"\n","lines":["var app = require('http').createServer(handler)",", io = require('socket.io').listen(app)",", fs = require('fs')","","app.listen(process.env.PORT || 8001);","","function handler (req, res) {","fs.readFile('index.html',","function (err, data) {","if (err) {","res.writeHead(500);","return res.end('Error loading index.html');","}","","res.writeHead(200, {'Content-Type': 'text/html', \"Content-Length\": data.length});","res.end(data);","});","}","","io.sockets.on('connection', function (socket) {","// echo the message","socket.on('message', function (data) {","console.info(data);","socket.send(\"[ECHO] \"+data);","});"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":27}},"text":"var http = require('http');"},{"action":"insertText","range":{"start":{"row":0,"column":27},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":5,"column":0}},"lines":["http.createServer(function (req, res) {","  res.writeHead(200, {'Content-Type': 'text/plain'});","  res.end('Hello World\\n');","}).listen(1337, '127.0.0.1');"]},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":56}},"text":"console.log('Server running at http://127.0.0.1:1337/');"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":56},"end":{"row":6,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":7,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":25}},"text":"var net = require('net');"},{"action":"insertText","range":{"start":{"row":7,"column":25},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":8,"column":0},"end":{"row":14,"column":0}},"lines":["","var server = net.createServer(function (socket) {","  socket.write('Echo server\\r\\n');","  socket.pipe(socket);","});",""]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":33}},"text":"server.listen(1337, '127.0.0.1');"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":29},"end":{"row":5,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":33}},"text":"server.on('listening',function(){"},{"action":"insertText","range":{"start":{"row":5,"column":33},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":6,"column":0},"end":{"row":7,"column":0}},"lines":["    console.log('ok, server is running');"]},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":29},"end":{"row":5,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":3},"end":{"row":9,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"});"},{"action":"removeText","range":{"start":{"row":7,"column":41},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":30},"end":{"row":7,"column":41}},"text":" running');"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":21},"end":{"row":7,"column":30}},"text":"server is"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":20},"end":{"row":7,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":20},"end":{"row":7,"column":28}},"text":" server "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":28},"end":{"row":7,"column":31}},"text":"is "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":31},"end":{"row":7,"column":41}},"text":"running');"},{"action":"insertText","range":{"start":{"row":7,"column":41},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":6,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["server.on('listening',function(){","    console.log('ok, server is running');"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":14}},"text":"1337"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":14}},"text":"9999"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":14},"end":{"row":4,"column":15}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":18}},"text":"1337"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":17}},"text":"999"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":19}},"text":"99"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":18},"end":{"row":17,"column":19}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":13},"end":{"row":4,"column":14}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":13},"end":{"row":4,"column":14}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":12},"end":{"row":4,"column":14}},"text":"99"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":12},"end":{"row":4,"column":13}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":12},"end":{"row":4,"column":13}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":12}},"text":"99"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":11}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":11}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":11},"end":{"row":4,"column":14}},"text":"000"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":14},"end":{"row":4,"column":15}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":18}},"text":"9999"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":13},"end":{"row":17,"column":14}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":13},"end":{"row":17,"column":15}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":13},"end":{"row":17,"column":15}},"text":"()"},{"action":"insertText","range":{"start":{"row":17,"column":13},"end":{"row":17,"column":14}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":15}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":15}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":15}},"text":","},{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":15}},"text":"2"},{"action":"removeText","range":{"start":{"row":17,"column":15},"end":{"row":17,"column":16}},"text":" "},{"action":"insertText","range":{"start":{"row":17,"column":15},"end":{"row":17,"column":16}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":16},"end":{"row":17,"column":17}},"text":"'"},{"action":"insertText","range":{"start":{"row":17,"column":16},"end":{"row":17,"column":17}},"text":"0"},{"action":"removeText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":18}},"text":"1"},{"action":"insertText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":18}},"text":"0"},{"action":"removeText","range":{"start":{"row":17,"column":18},"end":{"row":17,"column":19}},"text":"2"},{"action":"insertText","range":{"start":{"row":17,"column":18},"end":{"row":17,"column":19}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":19}},"text":"00"},{"action":"insertText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":19}},"text":"12"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":15},"end":{"row":17,"column":17}},"text":"00"},{"action":"insertText","range":{"start":{"row":17,"column":15},"end":{"row":17,"column":17}},"text":" '"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":15}},"text":"2"},{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":15}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":17}},"text":"200"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":18}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":18},"end":{"row":17,"column":19}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":16},"end":{"row":17,"column":19}},"text":"000"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":16}},"text":"20"},{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":15}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":15},"end":{"row":17,"column":18}},"text":"999"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":12},"end":{"row":4,"column":15}},"text":"000"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":12}},"text":"20"},{"action":"insertText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":11}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":13}},"text":"999"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":12},"end":{"row":4,"column":13}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":12},"end":{"row":4,"column":13}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":13},"end":{"row":4,"column":14}},"text":"9"},{"action":"insertText","range":{"start":{"row":17,"column":18},"end":{"row":17,"column":19}},"text":"9"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":17},"end":{"row":17,"column":19}},"text":"99"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":17}},"text":"999"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":14},"end":{"row":17,"column":16}},"text":"13"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":13},"end":{"row":4,"column":15}},"text":"99"},{"action":"insertText","range":{"start":{"row":17,"column":16},"end":{"row":17,"column":18}},"text":"37"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":11},"end":{"row":4,"column":13}},"text":"99"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":11}},"text":"9"},{"action":"insertText","range":{"start":{"row":4,"column":10},"end":{"row":4,"column":11}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":11},"end":{"row":4,"column":14}},"text":"337"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":33},"end":{"row":17,"column":33},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1411646842248}