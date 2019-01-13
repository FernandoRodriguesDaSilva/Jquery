
$(function(){
	// Quando clickar em alguma foto da galeria
	$('a.galeria').bind('click', function(){
		var img = $(this).find('img').attr('src')
		// mandando o caminho da imagem para a div
		$('.divbox img').attr('src',img)
		// Inserindo dentro da div
		$('.bgbox, .divbox').fadeIn('fast')
	})
	// Evento de fechar na tela preta
	$('.bgbox, .divbox button').bind('click', function(){
		$('.bgbox, .divbox').fadeOut('fast')
	})
})