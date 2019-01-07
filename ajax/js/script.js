// index.php
$(function(){
	$('button').bind('click', function(){
		// carregando uma pagina externa
		//$('.div').load("test.php")
		$.post("test.php", function (parametro_qualquer){
			$('.div').html(parametro_qualquer)
		})
	})
})
// formulario.php
$(function(){
	$('#form').bind('submit', function(e){
		// página não vai recarregar
		e.preventDefault();
		// funcão serialize ( formata para facilitar o envio)
		var txt = $(this).serialize();
		console.log(txt);
		$.ajax({
			type:'POST',
			url:'req/requisicao.php',
			data:txt,
			dataType:'json', // resultado vai vim do tipo json
			success:function(json){
				alert("Nome é: " + json.nome + " e tem " + json.qt_nome +"caracteres");
			}
		})
	})
})

// dados.php
$(function(){
	$('#form_dados').bind('submit', function(e){
		// página não vai recarregar
		e.preventDefault();
		// funcão serialize ( formata para facilitar o envio)
		var txt = $(this).serialize();
		console.log(txt);
		// função que faz requisição ajax
		$.ajax({
			type:'POST', // tipo de requisição Post/Get
			url:'ajax.php', // pegar as respostas desse endereço
			data:txt,	   // enviar as informações para txt
			success:function(resultado){
				$('.div_dados').html("Resultado: " + resultado)
			},
			error:function(){
				alert("Ocorreu um erro!")
			}
		})

	})
})


// formulario_real.php
$(function(){
	$('#form_dados_real').bind('submit', function(e){
		// página não vai recarregar
		e.preventDefault();
		// funcão serialize ( formata para facilitar o envio)
		var txt = $(this).serialize();
		console.log(txt);
		// função que faz requisição ajax
		$.ajax({
			type:'POST', // tipo de requisição Post/Get
			url:'req/formulario.php', // pegar as respostas desse endereço
			data:txt,	   // enviar as informações para txt
			dataType:'json',
			success:function(json){
				console.log(json.status);
					$('.div_formulario_real').html(json.status)
			},
			error:function(){
				alert("Ocorreu um erro!")
			}
		})

	})
})