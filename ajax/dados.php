<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Curso de Jquery</title>
	<style>
		.div_dados{
			width: 200px;
			height: 170px;
			background-color: #eee;
		}
	</style>
</head>
<body>

<form method="post" id="form_dados">
	Número 1:<br>
	<input type="text" name="x"><br><br>
	Número 2:<br>
	<input type="text" name="y"><br><br>
	
	<input type="submit" value="Entrar">
</form>

<div class="div_dados"></div>

	<script src="js/jquery.js"></script>
	<script src="js/script.js"></script>
</body>
</html>