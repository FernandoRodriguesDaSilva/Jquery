<?php 

$nome = $_POST['nome'];
$senha = $_POST['senha'];

$array = array('status' => '');

if ($nome == 'ferex' && $senha == '123'){
	$array['status'] = 'ok';
}

if ($nome == '' && $senha == ''){
	$array['status'] = 'Digite um login e senha para entrar';
}

 else {
	$array['status'] = 'login e senha';
}

echo json_encode($array);