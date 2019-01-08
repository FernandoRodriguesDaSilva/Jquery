<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<style>
div#banner{
	width: 960px;
	height: 200px;
	margin: auto;
	background: url('img/1.JPG') no-repeat 0 0;
}
</style>
<body>
	<div id="banner"></div>
	<script src="js/jquery.js"></script>
	<script>
		(function($){
			var x = 0
			var y = 0

			var banner = $("#banner");

			banner.css('backgroundPosition', x + 'px' + ' ' + y +'px')

			window.setInterval(function(){
				banner.css('backgroundPosition', x + 'px' + ' ' + y +'px')
				y--
			},180)
		})(jQuery)
	</script>
</body>
</html>