$(function(){
	$('.icone').hover(function(){
		// Mostra o animate que está o menu
		$(this).animate({
			"width":100,
			"height":100,
			"margin-top":-30
		}, 80)
	}, function (){ // esconde o animate que está o menu
		$(this).animate({
			"width":70,
			"height":70,
			"margin-top":0
		}, 80)
	})
})