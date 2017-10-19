<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}

$message;

if ($name== true) {
	$message .= "Имя: $name";
}
if ($phone== true) {
	$message .= "\nТелефон: $phone";
}
$to = "e5ash.bro@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>