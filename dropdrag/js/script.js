// Plugin baixado da internet
$(function(){
	// aperto o mouse
	$('#objeto').bind('mousedown', function(){
	// ativa o mousemove pegando os eventos
	$('#objeto').bind('mousemove', function(e){
		// coordenadas para move o mouse
		var x = e.originalEvent.pageX
		var y = e.originalEvent.pageY

		var width = $(this).width();
		var height = $(this).height();
		
		$(this).css('left', (x - (width/2)) + 'px')
		$(this).css('top', (y - (height/2)) + 'px')
	})
})
	
// Desativa o mousemove
$('#objeto').bind('mouseup', function(){
	$('#objeto').unbind('mousemove')
})
})