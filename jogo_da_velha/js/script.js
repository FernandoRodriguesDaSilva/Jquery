var vez = 'o'

function atualizarPlacar(){
	if(vez == 'o'){
		$('.placar img').attr('src','images/o.jpg')
	} else {
		$('.placar img').attr('src','images/x.jpg')
	}
}

function verificarCampeao(){

	var ganhador = ''

	var a1 = $('.a1').attr('data-marcado')
	var a2 = $('.a2').attr('data-marcado')
	var a3 = $('.a3').attr('data-marcado')

	var b1 = $('.b1').attr('data-marcado')
	var b2 = $('.b2').attr('data-marcado')
	var b3 = $('.b3').attr('data-marcado')

	var c1 = $('.c1').attr('data-marcado')
	var c2 = $('.c2').attr('data-marcado')
	var c3 = $('.c3').attr('data-marcado')

	// vertica , horizonta , diagonal

	for(var i = 0; i <= 1; i++){ // vai rodar o i sendo = 0 e i sendo = 1
		if(i ==  0){ // 0 é igual a o
			var op = 'o'
		} else { // 1 é igual a x
			var op = 'x'
		}
		 // Ganhador na horizontal // 
		 if ( a1 == op && b1 == op && c1 == op){
		 	ganhador = op
		 } else if ( a2 == op && b2 == op && c2 == op){
		 	ganhador = op
		 } else if  ( a3 == op && b3 == op && c3 == op){
		 	ganhador = op
		} // FIM  = // Ganhador na horizontal //

		// Ganhador na Vertical //
		else if ( a1 == op && a2 == op && a3 == op){
			ganhador = op
		} else  if ( b1 == op && b2 == op && b3 == op){
			ganhador = op
		} else if ( c1 == op && c2 == op && c3 == op){
			ganhador = op
		} // Fim = // Ganhador na vertical

		// Ganhador na diagonal
		else if ( a1 == op && b2 == op && c3 == op){
			ganhador = op
		} else  if ( a3 == op && b2 == op && c1 == op){
			ganhador = op
		} // Fim / Ganhador na diagonal
	}
		// Se houve um ganhador
		if(ganhador != ''){
			if(ganhador == 'o'){
				alert("o ganhador foi: o")
			} else {
				alert('o ganhador foi: x')
			}
		// Se alguem ganhou zera as imagens
		$('.area').html('')
		// zerar as areas marcadas
		$('.area').attr('data-marcado','')
	}
	// Verificar se todas estão marcadas e nenhum ganhou
	else if(a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != ''){
		alert("ninguem ganhou ... Jogue outra rodada")
	}
}


// CODIGO PRINCIPAL - CHAMA AS FUNCÕES
$(function(){
	atualizarPlacar();
// Logica para inserir imagem dentro das Areas
$('.area').bind('click', function(){
		// verificar se já tem uma imagem dentro da area selecionada
		if( $(this).find('img').length == 0){
			if(vez == 'o'){
				// vai adicionar a imagem dentro da area
				$(this).html('<img src="images/o.jpg" border="0" height="50" />')
				$(this).attr('data-marcado','o')
				//trocar de vez 
				vez = 'x'
			} else { // senão adiciona o x
				$(this).html('<img src="images/x.jpg" border="0" height="50" />')
				$(this).attr('data-marcado','x')
				//trocar de vez 
				vez = 'o'
			}
			atualizarPlacar();
			// LOGICA PARA VERIFICAR QUEM VENCEU
			verificarCampeao();

		}
	})

})