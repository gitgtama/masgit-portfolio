<?php
require '../config.php';

$input = json_decode(file_get_contents("php://input"), true);
$id = $input['id'] ?? 0;

$stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
$stmt->execute([$id]);

echo json_encode(["status" => "deleted"]);