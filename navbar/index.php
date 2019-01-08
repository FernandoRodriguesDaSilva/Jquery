<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>navbar</title>
	<link rel="stylesheet" href="js/font-awesome.min.css">
</head>
<style>
html,body{
	margin: 0;
	padding: 0;
	width: 100%;
}

body{
	font-family: Quicksand;
}

header {
	width: 100%;
	height: 100vh;
	background: url('img/2.jpg') no-repeat 50% 50%;
	background-size: cover;
}

.content {
	width: 90%;
	margin: 4em auto;
	font-size: 20px;
	line-height: 30px;
	text-align: justify;
}

.logo{
	position: fixed;
	float: left;
	margin: 15px 35px;
	color: #fff;
	font-weight: bold;
	font-size: 24px;
}

nav{
	position: fixed;
	width: 100%;
}

nav ul {
	list-style: none;
	background:  rgba(0, 0, 0,0);
	overflow: hidden;
	color: #fff;
	padding: 0;
	text-align: center;
	margin: 0;
	transition: 1s;
}

nav.black ul {
	background:  #000;
}

nav ul li {
	display: inline-block;
	padding: 20px;
}

nav ul li a {
	text-decoration: none;
	color: #fff;
	font-size: 1.3em;
}

.menu-icon{
	width: 100%;
	background: #000;
	text-align: right;
	box-sizing: : border-box;
	padding: 15px 24px;
	cursor: pointer;
	color: #fff;
	display: none;

}

/* Parei em 5:29

https://www.youtube.com/watch?v=ZeL2IL-dLuM

exemplo de slider 

https://www.youtube.com/watch?v=3z76rc0znag

; */

</style>
<body>
	
	<div class="wrapper">
		<header>
			<nav>
				<div class="menu-icon">
					<i class="fa fa-bars fa-2x"></i>
				</div>
				<div class="logo">
					Logo
				</div>
				<div class="menu">
					<ul>
						<li><a href="">Home</a></li>
						<li><a href="">About</a></li>
						<li><a href="">Blog</a></li>
						<li><a href="">Contact</a></li>
					</ul>
				</div>
			</nav>
		</header>
		<div class="content">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis officia animi debitis sapiente ea assumenda, libero adipisci iusto, maiores est ex quisquam deleniti ratione sint harum excepturi voluptates error ducimus?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis officia animi debitis sapiente ea assumenda, libero adipisci iusto, maiores est ex quisquam deleniti ratione sint harum excepturi voluptates error ducimus?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis officia animi debitis sapiente ea assumenda, libero adipisci iusto, maiores est ex quisquam deleniti ratione sint harum excepturi voluptates error ducimus?</p>
		</div>
	</div>


	<script src="js/jquery.js"></script>
</body>
</html>