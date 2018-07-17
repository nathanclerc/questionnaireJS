var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

var question = [];

app.use('/questionnaire', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(8080, function () {
	console.log('Connection sur le port 8080!');
});

var connection = mysql.createConnection({
	host: 'localhost',
	user: '#',
	password: '#',
	database: 'Questionnaire'
});

connection.connect(function(err) {
	if (err) throw err
		console.log('You are now connected...');
	connection.query('SELECT * FROM Questions', function(err, results) {
		if (err) throw err
			for (var i = 0; i < results.length; i++) {
				question.push({
					ID : results[i].Id,
					question : results[i].Question,
					reponse1 : results[i].Reponse1,
					reponse2 : results[i].Reponse2,
					reponse3 : results[i].Reponse3,
					reponse4 : results[i].Reponse4
				});
			};
		});
});


app.get('/Question', function(req, res) {
	res.json(question);
	console.log(question);
});