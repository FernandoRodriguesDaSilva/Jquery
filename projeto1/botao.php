<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<title>testando</title>
	
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-3">
				<div class="botao">Botão</div>
				<div class="div"></div>
			</div>
			<div class="col-3">
				<div class="botao2">Botão</div>
				<div class="div-2"></div>
			</div>
			<div class="col-3">
				<div class="botao3">Botão</div>
				<div class="div-3">hello word</div>
			</div>
			<div class="col-3">
				<div class="botao4">Botão</div>
				<div class="div-4"></div>
			</div>
		</div>
	</div>
	
	<script src="js/jquery.js"></script>
	<script src="js/animate.js"></script>
	<script src="js/bootstrap.min.js"></script>
</body>

<script>
	//$('.div').hide('slow')
	// quando houver um click vai executar essa funçao
	$(function(){
		// clicando no botão vai fazer um efeito rápido sobre a div
		$('.botao').bind('click',function(){
			$('.div').toggle('fast');
		});
	});
</script>

</html>