//const and let de waarde kan niet worden gewijzigd het kan maar 1 keer gedeclareerd worden
// var hoisting javascript door var functions te gebruiken zorg je ervoor dat je de functie altijd kan gebruiken omdat het als variable gezien wordt
// var host = '0.0.0.0'; Heroku
var express = require('express');

var host = '127.0.0.1';
var port = '8080';

var app = express();

var routes = require('./app/index.js');

app.listen(port, host);
// app,action

app.use(routes);
console.log('server started on port 127.0.0.1:8080');

