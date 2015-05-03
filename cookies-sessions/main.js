var mongoose = require('mongoose');
mongoose.connect('http://localhost:27017/sessionsSession');

mongoose.model('User', {
    email: String,
    password: String
});

var userModel = mongoose.model('User');

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

app.listen(9001);

app.use(cookieParser());

app.get('/', function (req, res) {
    res.send('Boring home page');
});

app.get('/members-only', function (req, res) {

    var sessionId = req.cookies.session_id;

    if (sessions[sessionId]) {
        res.send('Hello, welcome to the members area' + sessions[sessionId]);
    } else {
        res.redirect('/');
    }

});

app.get('/login', function (req, res) {

    var name = req.query.name;
    var password = req.query.password;

    if (db.users[0].name === name && db.users[0].password === password) {
        res.setHeader('Set-Cookie', 'session_id=glorp');
        sessions['glorp'] = 'Joe';
    }

    res.send('Thanks, you are logged in!');

});