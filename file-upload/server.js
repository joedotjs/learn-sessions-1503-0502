var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var fs = require('fs');

app.listen(1337);

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb' }));

app.get('/', function (req, res) {
    res.sendFile('./index.html');
});

app.post('/upload', function (req, res) {
    var base64String = req.body.image.split(',')[1];
    var image = new Buffer(base64String, 'base64');
    fs.writeFile('./my-song.mp3', image, function (err) {
       console.error(err);
    });
});