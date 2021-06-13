<?php

require 'vendor/autoload.php';

use Malico\MobileCM\Network;

header('Content-Type: application/json');

$phone = $_REQUEST['phone_number'] ?? null;

if ($phone) {
    echo json_encode([
        'network' => Network::check($phone),
        'isMtn' => Network::isMtn($phone),
        'isOrange' => Network::isOrange($phone),
        'isNexttel' => Network::isNexttel($phone)
    ]);
} else {
    header("HTTP/1.0 422 Provide Phone Number");
    echo json_encode([
        'error' => [
            'Provide Phone Number'
        ]
    ]);
}
