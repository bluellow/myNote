<?php
    header('Content-Type:text/html;charset=utf-8');
    $b2 = $_GET['b2'];
//    print_r($b2);
    $backgroucn = array(
        'bg1' => 'red',
        'bg2' => 'yellow'
    );
    echo(json_encode($backgroucn));
?> 



