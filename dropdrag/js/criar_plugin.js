// estrutura que engloba o plugin
(function($){
	$.fn.showRealLink = function(){
	//pega os elementos selecionados em cada elemento
	this.each(function(){
		//pegando o link
		var link = $(this).attr('href')
		// adicionando um texto
		$(this).append(' ('+link+') ')
	})
	// retornando o proprio objeto
	return this
}
}(jQuery));