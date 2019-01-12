function addBola(){
	// pega quantida aleatoria
	var x = Math.floor(Math.random()*800)
	var y = Math.floor(Math.random()*500)
// azul,vermelho, amarelo ,verde, violeta
var cor = Math.floor(Math.random()*6)//numero de cores

var bola = $('<div class="bola"></div>')

bola.css('left', x + 'px' )
bola.css('top', y + 'px' )

switch(cor){
	case 0:
	bola.css('background-color','blue')
	break;
	case 1:
	bola.css('background-color','orange')
	break;
	case 2:
	bola.css('background-color','violet')
	break;
	case 3:
	bola.css('background-color','red')
	break;
	case 4:
	bola.css('background-color','green')
	break;
	case 5:
	bola.css('background-color','pink')
	break;
}
	// evento de click das bolas 
	bola.bind('click', function(){
		// sempre que clicar vai sumir a bola lentamente
		$(this).fadeOut('fast');
		// sempre que clicar vai adicionar no placar
		placar++;
		// depois atualiza placar
		updatePlacar();
	})
	// Criar um elemento e já mostar ele na tela
	$(document.body).append(bola)
}

$(function(){
	$('#comecar').bind('click',function(){
		// Mostra o time que executa de tempo em tempo
		setInterval(addBola, 1000)
	})
})

var placar = 0;

function updatePlacar(){
	$('#placar').html(placar)
}