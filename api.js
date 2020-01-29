var express = require('express');
var app = express();
var url = require('url');

/*
var parsedUrl = url.parse(req.url, true);
date = new Date(parsed.query.iso);
console.log(date);
*/


app.get('/', function(req, res){
    console.log('this is the home endpoint');
})

app.get('/parsetime', function(req, res){
    var parsedUrl = url.parse(req.url, true).query.iso;
    var date = new Date(parsedUrl);
    object = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    return res.end(JSON.stringify(object));
})

app.get('/unixtime', function(req, res){
    var parsedUrl = url.parse(req.url, true).query.iso;
    var date = new Date(parsedUrl);
    object = {
        unixtime: date.getTime()
    };
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    return res.end(JSON.stringify(object));
})

app.get('*', function(req, res){
    res.send('400');
})




app.listen(3000);