var express = require('express');
var server = express.createServer();
var fs = require('fs');

/**
    Configuration
**/
server.set('view_engine', 'jade');
server.set('views', _dirname + '/views');
server.set('view options', { layout: false});

/**
    App init
**/
server.use(express.bodyParser());
server.use(express.cookieParser());
server.use(express.session());

server.get('/', function (req, res, next){
    res.render('index', { authenticated: false});
});

server.post('/login', function (req, res, next) {
    fs.readFile(_dirname + 'users.json', function(err, data){
        var users = JSON.parse(data);
    });
});

module.exports = server;


