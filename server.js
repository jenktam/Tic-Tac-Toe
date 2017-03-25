var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.set('Content-Type', 'text/html');
  response.status(200);
  response.sendFile(path.resolve(__dirname, 'client/index.html'));
});

app.get('/bundle.js', function(request, response) {
  response.set('Content-Type', 'text/html');
  response.status(200);
  response.sendFile(path.resolve(__dirname, 'client/bundle.js'));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});