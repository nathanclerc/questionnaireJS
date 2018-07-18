//chargement des librairies JS
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

var question = [];

//charge les fichiers static qui sont dans le dossier .../public
//ces fichiers seront accessible a l'adresse .../questionnaire
app.use('/questionnaire', express.static(__dirname + '/public'));

//initialisation de body-parser qui sert a parser les json échangé avec app.js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//définis le port ou il faut se connecté
app.listen(8080, function () {
	console.log('Connection sur le port 8080!');
});

//création des paramètres de connection pour la base de donnée
var connection = mysql.createConnection({
	host: 'x',
	user: 'x',
	password: 'x',
	database: 'x'
});

//connection a la base de données avec les paramètres définis précédemment
connection.connect(function(err) {
//if err sert a catcher les erreurs
	if (err) throw err
		console.log('You are now connected...');
//fait une requête SQL a la base de donnée
	connection.query('SELECT * FROM Questions', function(err, results) {
		if (err) throw err
			//parcours le tableau results qui est renvoyé par la base de donnée
			for (var i = 0; i < results.length; i++) {
//push des objets du tableau results qui ont donc les clé de la BDD
				// question.push(results[i]);
//création d'objet avec de nouvelles clés et push dans le tableau question
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


//envois le tableau question en json quand une requête ajax est fait sur cette URL
app.get('/Question', function(req, res) {
	res.json(question);
	console.log(question);
});