<?php
require dirname(__DIR__) . '/config.php';

$stmt = $pdo->query("SELECT * FROM projects ORDER BY id DESC");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
