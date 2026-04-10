<?php
require '../config.php';

$input = json_decode(file_get_contents("php://input"), true);

$title = $input['title'] ?? '';
$desc  = $input['desc'] ?? '';

$stmt = $pdo->prepare("INSERT INTO projects (title, desc) VALUES (?, ?)");
$stmt->execute([$title, $desc]);

echo json_encode(["status" => "success"]);