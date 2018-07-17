	var tabQuestions= [];

	$.ajax('/Question').done(function(question){
		for (var i = 0; i < question.length; i++) {
			tabQuestions.push(question[i]);
		}
	});

	$('body').on('click', '.next', function (){
		var quest = parseInt($(this).val());

		$('#body').empty();
		$('#body').append('<table><thead><tr><th>Question '+tabQuestions[quest].ID+'</th></tr><tr><th>Question '+tabQuestions[quest].question+'</th></tr></thead><tbody id="questionnaire" ></tbody>');

		$('#questionnaire').append('<tr><td><button class="rep">'+tabQuestions[quest].reponse1+'</button></td><td><button class="rep">'+tabQuestions[quest].reponse2+'</button></td></tr>');
		$('#questionnaire').append('<tr><td><button class="rep">'+tabQuestions[quest].reponse3+'</button></td><td><button class="rep">'+tabQuestions[quest].reponse4+'</button></td></tr>');
		$('body').on('click', '.rep', function(){
			var reponse = $(this).html();

			$('.rep').prop('disabled', true);
			if (reponse == 'La France') {
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
				$(this).css('background-color', 'red');
			}
		});
		$('#body').append('<button value="'+(quest-1)+'" class="next" >Question suivante</button>');
		$('#body').append('<button value="'+(quest+1)+'" class="next" >Question suivante</button>');
	});
