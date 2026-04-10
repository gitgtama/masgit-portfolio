<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

function getInput() {
    $contentType = $_SERVER["CONTENT_TYPE"] ?? '';

    // kalau JSON
    if (strpos($contentType, "application/json") !== false) {
        return json_decode(file_get_contents("php://input"), true);
    }

    // kalau form biasa
    return $_POST;
}

$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// routing API
if (strpos($request, '/gallery/') === 0) {

    $path = str_replace('/gallery/', '', $request);
    $file = __DIR__ . '/gallery/' . $path . '.php';

    if (file_exists($file)) {
        require $file;
        return;
    }

    http_response_code(404);
    echo json_encode(["error" => "API not found"]);
    return;
}

// default
echo json_encode(["message" => "API aktif 🚀"]);