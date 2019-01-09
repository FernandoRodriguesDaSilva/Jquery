$(function (){
	$('.botao2').bind('click',function(){
		$('.div-2').animate({
			// aplicando o atributo da animação
			'margin-left':'100px',
			'margin-top':'20px',
			'width':500,
			'border-radius':'75px'
		}, {
			// aplicando o tempo da animação
			duration:1000,
			// quando passa por cada etapa da animação
			step:function(){
				console.log("Nova etapa ...")
			},
			// quando terminar executar a função complete
			complete:function(){
				
				$('.div-2').animate({
			// aplicando o atributo da animação voltando ao inicio
			'margin-left':'0px',
			'margin-top':'0px',
			'width':150,
			'border-radius':'0px'
		}, 1000)
				console.log("Animação finalizada!");
			},
		// quando iniciar a animação executa a função start
		start:function(){
			console.log("animação Começou!");
		}
	})
	})
})


$(function(){
	$('.botao3').bind('click',function(){

		$('.div-3').animate({
			'font-size':'30px',
			'font-family':'Arial'
		}, {
			duration:1000,
			// Depois que executar fazer o seguinte


		})
	})
})
