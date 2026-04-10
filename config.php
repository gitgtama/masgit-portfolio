<?php

$host = "HOST_KAMU";
$db   = "postgres";
$user = "postgres";
$pass = "PASSWORD_KAMU";

try {
    $pdo = new PDO("pgsql:host=$host;port=5432;dbname=$db;", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "DB Connection failed"]);
    exit;
}