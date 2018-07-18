var tabQuestions= [];

//requête ajax au chargement de la page
$.ajax('/Question').done(function(question){
	for (var i = 0; i < question.length; i++) {
		tabQuestions.push(question[i]);
	}
});

//écoute les click de class next dans l'élément body, même si les boutons sont généré dynamiquement
$('body').on('click', '.next', function (){
//récupère la valeur associé aux boutons et la transforme en type number
	var quest = parseInt($(this).val());
//vide le body a chaque click
	$('#body').empty();
//crée des TH avec des données de la BDD
	$('#body').append('<table><thead><tr><th>Question '+tabQuestions[quest].ID+'</th></tr><tr><th>Question '+tabQuestions[quest].question+'</th></tr></thead><tbody id="questionnaire" ></tbody>');

//crée des TD avec des données de la BDD||| Boutons généré avec une class rep!!!!
	$('#questionnaire').append('<tr><td><button class="rep">'+tabQuestions[quest].reponse1+'</button></td><td><button class="rep">'+tabQuestions[quest].reponse2+'</button></td></tr>');
	$('#questionnaire').append('<tr><td><button class="rep">'+tabQuestions[quest].reponse3+'</button></td><td><button class="rep">'+tabQuestions[quest].reponse4+'</button></td></tr>');
//écoute les click de class rep dans l'élément body, même si les boutons sont généré dynamiquement
	$('body').on('click', '.rep', function(){
//récupère ce que contient le bouton click
		var reponse = $(this).html();

//désactive tout les boutons de class rep quand l'un d'eux est cliqué
		$('.rep').prop('disabled', true);
//compare le bouton cliqué avec la réponse
		if (reponse == 'La France') {
//change la couleur du bouton cliqué en vert si c'est juste
			$(this).css('background-color', 'green');
		}else if (reponse == 'Paris') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Les Monténégrins') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Entre 1914 et 1918') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Le 15 août 1769') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Des fruits et des céréales, pour vous sentir en pleine forme.') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Que pour la mafia.') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Hulk') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Mark Zuckerberg') {
			$(this).css('background-color', 'green');
		}else if (reponse == 'Link') {
			$(this).css('background-color', 'green');
		}else{
//si le bouton clické est faux change la couleur en rouge
			$(this).css('background-color', 'red');
		}
	});
//crée les boutons suivant et précédent
	$('#body').append('<button value="'+(quest-1)+'" class="next" >Question précédente</button>');
	$('#body').append('<button value="'+(quest+1)+'" class="next" >Question suivante</button>');
});
