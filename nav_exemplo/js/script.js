$(function(){
	$('li').hover(function(){
		// Mostra o li que está o menu
		$(this).find('.menu2').slideDown()
	}, function (){ // esconde o li que está o menu
		$(this).find('.menu2').slideUp()
	})
})