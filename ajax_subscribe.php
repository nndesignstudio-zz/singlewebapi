<?php

function email($to, $subject, $message, $from) {
    $date = date("d/m/Y");
    $headers = "From:" . $from . "\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Date: $date\n";
    $headers .= "Delivered-to: $to\n";
    $headers .= "Return-Path: " . $from . " <example@yahoo.com>\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\n";
    mail($to, $subject, $message, $headers);
}

if (isset($_POST['my_email'])) {
    $his_email = $_POST['his_email'];
    $my_email = $_POST['my_email'];
    $smessage = $his_email.' subscribed to your Rocking Parallax Iphone Showcase newsletter';
    if (preg_match('/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,6}$/', $his_email)) {
        $to = $my_email;
        $subject = 'New Subscriber Message';
        $from = 'Rocking Parallax Iphone Showcase';
        $message = $smessage;
        email($to, $subject, $message, $from);
        $response = 'ok';
    } else {
        $response = 'not';
    } $resp = array('response' => $response);
    echo json_encode($resp);
}
?>
