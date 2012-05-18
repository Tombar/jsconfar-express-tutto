var express = require('express');
var server = express.createServer();

/**
    Configuration
**/
server.set('view_engine', 'jade');
server.set('views', _dirname + '/views');
server.set('view options', { layout: false});

server.get('/', function (req, res, next){
    res.render('index', { authenticated: false});
});

module.exports = server;


