// Plugin baixado da internet
$(function(){
	$('#cep').mask('00000-000')	
	$('#telefone').mask('(00)00000-0000')
	$('#idade').mask('00/00/0000')
	$('#cpf').mask('000.000.000-00', {reverse: true})
	$('#cnpj').mask('00.000.000/0000-00', {reverse:true})
	$('#money').mask('000.000.000.000.000.00', {reverse:true})
	$('#percent').mask('##0,00', {reverse:true})
	})