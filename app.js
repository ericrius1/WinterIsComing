'use strict';

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');


var app = express();
var server = http.createServer(app);

var WebSocketServer = require('websocket').server;
var wsServer = new WebSocketServer({
    httpServer: server
});

var users = [];

wsServer.on('request', function(request) {
    console.log("SOMEONE JOINED");
    var connection = request.accept(null, request.origin);
    connection.on('message', function(data) {
        console.log('data', data);
        var userData= JSON.parse(data.utf8Data);
        users.push({id: userData.id, username: userData.username, score: userData.score})
        console.log('users', users)
    });
});

app.get('/users', function(req, res) {
    res.send({users: users});
});



/* Configuration */
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000));

if (process.env.NODE_ENV === 'development') {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
}


/* Start server */
server.listen(app.get('port'), function() {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;