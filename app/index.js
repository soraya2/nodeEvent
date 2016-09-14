var express = require('express');
var app = express();
var motivations = require('motivations');
// hiermee geef je aan waar
var pickOne = require('pick-one');
app.get('/', function(request, response){
	response.send(pickOne(motivations));
});

app.get('/:motivationsID', function(request, response){
	var id = request.params.motivationsID;
	response.send(id);
});

module.exports =  app;
