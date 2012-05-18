var http = require('http');

var server =http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end('<h1>Hola Mundo</h1>');
});

/*
server.listen(3000, function () {
    console.log('Levantosky');
});
*/

module.exports = server;

