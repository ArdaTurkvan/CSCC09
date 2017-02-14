var express = require('express')
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.text({type:"*/*"}));

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url);
    next();
});

app.use(express.static('frontend'));

app.post('/api/', function (req, res, next) {
    res.end(req.body);
    next();
});

app.use(function (req, res, next){
    console.log("HTTP Response", res.statusCode);
});

var http = require('http');
var port = 3000;
http.createServer(app).listen(port, function(){
    console.log('HTTP on port ' + port);
});