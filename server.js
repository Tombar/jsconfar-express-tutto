var express = require('express')
,   mongoose = require('mongoose')
,   server = express.createServer();

/**
    Configuration
**/
mongoose.connect('mongodb://localhost/bla');
server.set('view_engine', 'jade');
server.set('views', __dirname + '/views');
server.set('view options', { layout: false});


var User = mongoose.model("User", new Schema({
        name: {first: String, last: String},
        user: String,
        pass: String,
    })
);
o
User.statics.authenticate = function ( user, pass, fn) {
    this.findOne({ 'user': user, 'pass': pass}), function (err, doc){
        if (err) return fn(err);
    }
/**
    App init
**/
server.use(express.bodyParser());
server.use(express.cookieParser());
server.use(express.session({secret: 'asdasdas'}));

server.get('/', function (req, res, next){
    res.render('index', { authenticated: req.session.authenticated});
});

server.post('/login', function (req, res, next) {
    fs.readFile(__dirname + 'users.json', function(err, data){
        var users = JSON.parse(data);
        if (users[req.body.user] == req.body.pass){
        t   req.session.authenticated = true;
        }
    });
});

module.exports = server;


