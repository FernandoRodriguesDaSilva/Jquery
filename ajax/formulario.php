<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Curso de Jquery</title>
	<style>
		.div{
			width: 200px;
			height: 170px;
			background-color: #eee;
		}
	</style>
</head>
<body>

<form method="post" id="form">
	Usuário:<br>
	<input type="text" name="nome"><br><br>
	Senha:<br>
	<input type="text" name="senha"><br><br>
	<select name="estado">
		<option>SP</option>
		<option>RJ</option>
		<option>SC</option>
	</select>
	<input type="submit" value="Entrar">
</form>

<div class="div_formulario"></div>

	<script src="js/jquery.js"></script>
	<script src="js/script.js"></script>
</body>
</html>