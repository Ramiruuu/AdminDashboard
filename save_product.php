<?php
header('Content-Type: application/json');
require_once 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

$stmt = $pdo->prepare("INSERT INTO products (image_url, name, status, price, stock, available_at) 
    VALUES (:image_url, :name, :status, :price, :stock, :available_at)");

$stmt->execute([
    ':image_url' => $data['image_url'],
    ':name' => $data['name'],
    ':status' => $data['status'],
    ':price' => $data['price'],
    ':stock' => $data['stock'],
    ':available_at' => $data['available_at']
]);

echo json_encode(['success' => true]);
?>