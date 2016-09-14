var express = require('express');
var app = express();
var motivations = require('motivations');
// hiermee geef je aan waar
var pickOne = require('pick-one');
var exphbs = require('express-handlebars')

app.use(express.static('./app/public'));

app.engine('handlebars', exphbs ({
	defaultLayout: 'main',
	layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views')
app.set('view engine', 'handlebars')

//je verwijst met motivation naar de file motivation in views
app.get('/', function(request, response){
	response.render('motivation', {motivation: pickOne(motivations)});
	// response.send(pickOne(motivations));
});

// app.get('/:motivationsID', function(request, response){
// 	var id = request.params.motivationsID;
// 	response.send(id);
// });

module.exports =  app;
