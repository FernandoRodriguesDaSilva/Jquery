<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Lightbox</title>
</head>
<style>
.bgbox {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	display: none;
}
.divbox{
	position: fixed;
	/* Posicionar no meio da tela */
	left: 50%;
	top: 50%;
	margin-left: -270px;
	margin-top: -220px;
	width: 500px;
	height: 400px;
	background-color: #fff;
	padding: 20px;
	display: none;
}

button {
	background-color: red;
	color: #fff;
}
</style>
<body>
	<a href="javascript:;" class="galeria"><img src="images/IMG_6957.JPG" width="150" border="0"></a>
	<a href="javascript:;" class="galeria"><img src="images/IMG_6958.JPG" width="150" border="0"></a>

	<div class="bgbox"></div>
	<div class="divbox">
		<img src="" alt=""  width="100%"><br/>
		<button>Fechar</button>
	</div>
		
	<script src="js/jquery.js"></script>
	<script src="js/script.js"></script>
</body>
</html>